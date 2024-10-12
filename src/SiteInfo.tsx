import Today from "./Components/Functions/Today"
import Site from "./InfoTemplates/SiteInfoTemplate"
import SocialMedia from "./InfoTemplates/SocialMedia"
import LogoImage from "./assets/LogoImage.png"
import Logo from "./assets/Logo.png"

const social_medias: { [key: string]: SocialMedia } = {
  facebook: {
    title: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61559566926404"
  },
  youtube: {
    title: "YouTube",
    link: "https://www.youtube.com/@CharmingChineseCulture"
  },
  instagramm: {
    title: "Instagramm",
    link: "https://www.instagram.com/nowbook_hk/"
  },

  wechat: {
    title: "知書 HK",
    link: "http://mp.weixin.qq.com/mp/homepage?__biz=MzUxNDY3MDA0NQ==&hid=7&sn=78400cd50d43032db956f463d52cf880&scene=18#wechat_redirect"
  }
};

const SiteInfo: Site = {
  title: "Riverwood Library",

  logo: {
    image: LogoImage,
    text: (<img src={Logo}/>),
  },

  brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, augue vitae pulvinar malesuada, augue ex bibendum lorem, sed fermentum massa massa id mi. Curabitur pretium blandit tortor id pharetra. Nam elementum, ligula ut aliquam mattis, lacus velit lacinia urna, eu luctus velit augue sed erat. Praesent sit amet feugiat nisl. In finibus nulla ac nisi dictum finibus sed vitae leo. Donec iaculis magna vel eleifend congue. Duis ac condimentum massa. Suspendisse aliquet orci venenatis libero placerat rutrum. Donec placerat viverra urna. Curabitur convallis ac urna eget accumsan.",

  latest_update: [2024, 9, 1],

  social_medias: social_medias,

  copyright: `©Wenchuan Lili Zhao ${String(Today[0])}`,

  contact: {
    address: {
      title: "公司地址",
      info: "香港九龍長沙灣永康街77號環薈中心1011室"
    },

    phone: {
      title: "業務拓展部",
      info: "（852）9824 9587",
    },

    mail: {
      title: "電郵",
      info: "marketing@suep.com",
    },

    whatsApp: {
      title: "中華文化研習社WhatsApp群組",
      info: "https://chat.whatsapp.com/BNS5UfWFlak7z2v22Lh3Zn",
    },
  }
}

export default SiteInfo