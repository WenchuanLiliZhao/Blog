import Template_Page from "../Pages/_Templates/Template_Page"
import SocialMedia from "./SocialMedia"

interface SocialMedias {
  [platform: string]: SocialMedia
}

interface Site {
  title: string,

  author: Template_Page,

  url: string,

  logo: {
    image: string
    text: JSX.Element,
  },

  brief: string,

  latest_update: [number, number, number],

  social_medias: SocialMedias,

  copyright: string,

  contact: { [key: string]: { 
    title: string,
    info: string,
   } },
}

export default Site