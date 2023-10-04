const db = {
    articles: [
      {
        id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        title: 'What is DevOps ?',
        content: 'DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to automate and streamline the software delivery and infrastructure management processes.',
        date: '03/09/2022',
        author: 'Hugo Dalmasso'
      },
      {
        id: '2e9e6b39-5e4d-4d4a-846a-9a37c7ebc12d',
        title: 'What is Node.js',
        content: 'Node.js is an open-source, server-side JavaScript runtime environment.',
        date: '23/07/2022',
        author: 'Ines Goulamhoussen'
      },
      {
        id: '8833d1c9-2a04-4f1f-96c1-7ce0e52c34aa',
        title: 'What is Express ?',
        content: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.',
        date: '04/10/2022',
        author: 'Teo Sialelli'
      },
      {
        id: 'a5c12f6a-412d-4d7e-8a07-98c32ea0888f',
        title: 'What are the tools used in DevOps ?',
        content: 'DevOps tools encompass a wide range of solutions such as Jenkins, Docker, Kubernetes, Ansible, and Git to facilitate automation and collaboration in software development and IT operations.',
        date: '04/11/2019',
        author: 'Teo Sialelli'
      },
      // ...
    ],
    comments: [
      {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        timestamp: 1664835049,
        content: 'Very useful article',
        articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        author: 'Bob McLaren'
      },
      {
        id: 'd866a182-af15-40a6-becb-0c46b90f6e12',
        timestamp: 1664835050,
        content: 'Thanks for the explications. Can you explain how can we install Node.js ?',
        articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        author: 'Alice Smith'
      },
      {
        id: 'f84768e5-b954-4d3b-8be5-5f6c5c238f49',
        timestamp: 1664835051,
        content: 'Good',
        articleId: '2e9e6b39-5e4d-4d4a-846a-9a37c7ebc12d',
        author: 'Charlie Brown'
      },
      // ...
    ]
  }
  
  module.exports = db;
  