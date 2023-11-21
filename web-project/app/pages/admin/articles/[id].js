import { useState, useEffect } from 'react';
//import { useSupabaseClient } from '@supabase/auth-helpers-react';
import md from 'markdown-it';
import Layout from '../../../components/Layout.js';
import { corsHeaders } from '../../../components/cors.ts';

export default function Articles({ id }) {
  const [article, setArticle] = useState(null);
  //const supabase = useSupabaseClient();

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('id, name, description, price')
        .eq('id', id)
        .single();

      console.log('Supabase query result:', { data, error });
        setArticle(data);
      
    };

    fetchArticle();
  }, [id]);
  return (
    <Layout title="Admin Articles" description="Generated by create next app">
      <h1 className="wt-title">View article</h1>
      {article && (
        <div className="overflow-hidden divide-y divide-slate-200 shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <div className="bg-slate-50">
            <dl className="grid grid-cols-auto 1fr px-3 py-4 italic text-slate-500 pr-3">

              <dd>article id : {article.id}</dd> 
              <dd>name : {article.name}</dd> 
              <dd>{article.description}</dd>
              <dd>{article.price}</dd>
            </dl>
          </div>
          <div className="px-3 py-10 bg-white">
            <div dangerouslySetInnerHTML={{ __html: md().render(article.description) }} />
          </div>
        </div>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.params.id
    },
  }
}
