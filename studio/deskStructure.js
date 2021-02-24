import S from '@sanity/desk-tool/structure-builder'
import MdBusiness from 'react-icons/lib/md/business'
import MdSettings from 'react-icons/lib/md/settings'
import FaFileO from 'react-icons/lib/fa/file-o'

const hiddenTypes = [
  'category',
  'companyInfo',
  'page',
  'person',
  'post',
  'quote',
  'project',
  'siteSettings'
]

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Company Info')
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType('companyInfo')
            .documentId('companyInfo')
        )
        .icon(MdBusiness),
      S.listItem()
        .title('Portfolio')
        .schemaType('project')
        .child(S.documentTypeList('project')),
      S.listItem()
        .title('Blog')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Quotes')
        .schemaType('quote')
        .child(S.documentTypeList('quote').title('Quotes')),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Index')
                .child(
                  S.editor()
                    .id('indexPage')
                    .schemaType('page')
                    .documentId('index')
                )
                .icon(FaFileO),
              S.listItem()
                .title('Projects')
                .child(
                  S.editor()
                    .id('projectsPage')
                    .schemaType('page')
                    .documentId('projects')
                )
                .icon(FaFileO),
              S.listItem()
                .title('Blog')
                .child(
                  S.editor()
                    .id('blogPage')
                    .schemaType('page')
                    .documentId('blog')
                )
                .icon(FaFileO),
              S.listItem()
                .title('About')
                .child(
                  S.editor()
                    .id('aboutPage')
                    .schemaType('page')
                    .documentId('about')
                )
                .icon(FaFileO),
              S.listItem()
                .title('Contact')
                .child(
                  S.editor()
                    .id('contactPage')
                    .schemaType('page')
                    .documentId('contact')
                )
                .icon(FaFileO)
            ])
        ),
      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ])
