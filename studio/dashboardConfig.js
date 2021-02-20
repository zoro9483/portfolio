export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6030d2de98d6e85521af1341',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-c41dtx38',
                  apiId: '4f586c40-15bc-4f91-bb91-6a14b984cbde'
                },
                {
                  buildHookId: '6030d2de96063b1cfab7d643',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-t6x28qdb',
                  apiId: '383d49f4-5322-46b1-a7fa-f1b0f33dd869'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zoro9483/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-t6x28qdb.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
