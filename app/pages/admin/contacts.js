import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import UserContext from '../../components/UserContext';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout.js';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const { user } = useContext(UserContext);
  const supabase = useSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        let { data, error, status } = await supabase
          .from('contacts')
          .select(`id, firstname, lastname, email`);
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error.message);
      }
    };

    const checkAdminStatus = async () => {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('admin')
          .eq('email', user.email);

        if (error) {
          console.error(error);
          return;
        }

        if (!data[0]?.admin) {
          router.push('/');
        }
      } catch (error) {
        console.error('Error checking admin status:', error.message);
      }
    };

    if (user) {
      fetchContacts();
      checkAdminStatus();
    }
  }, [supabase, user, router]);

  return (
    <Layout title="Contacts" description="Generated by create next app">
      {user && (
        <>
          <h1 className='text-3xl font-extrabold mb-4 text-green-1 text-center'>
            Messages received on the Contact us page
          </h1>
          <br /> <br />
          <div className="my-6">
            <div className="overflow-x-auto">
              <div className="align-middle min-w-full overflow-hidden overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-green-1">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Firstname
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Lastname
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {contacts.map((contact) => (
                      <tr key={contact.email}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{contact.firstname}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{contact.lastname}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{contact.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link href={`/admin/contacts/${contact.id}`}>
                            <div className="text-center">
                              <div className="w-10 h-10 bg-beige rounded-full flex items-center justify-center">
                                <ChevronRightIcon className="h-5 w-5 text-camel hover:text-beige-2" aria-hidden="true" />
                              </div>
                            </div>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}
