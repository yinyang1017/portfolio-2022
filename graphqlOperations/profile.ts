import { gql } from "@apollo/client"

const query =  {
  Queries: {
    getProfile: gql`
      query GetProfile {
        profiles {
          cv
          id
          name
          ownersPhoto {
            url
          }
          bgImages {
            url
          }
        }
      }
    `,
    getSocial: gql`
    query GetSocial {
      socials {
        label
        logoColor
        mediaUrl
        description
      }
    }
    `,
    getAddress: gql`
    query GetAddress {
      addresses {
        job
        phone
        map
        email
        address
      }
    }
    `,
    getNameImage: gql`
      query GetProfile {
        profiles {
          name
          ownersPhoto {
            url
          }
        }
      }
    `,

    getBio: gql`
      query GetBio {
        profiles {
          bio
        }
      }
    `,

    getServices: gql`
      query GetServices {
        services {
          id
          title
          serviceDesc
        }
      }
    `,

    getPrices: gql`
      query GetPrices {
        prices {
          id
          packageName
          packagePrice
          priceType
          freelanceUrl
          packageServices {
            id
            isIncluded
            packageService
          }
        }
      }
    `,

    getTestimonials: gql`
      query GetTestimonials {
        testimonials {
          id
          userName
          userProfession
          quote
          userImage {
            url
          }
        }
      }
    `,
  },
}
export default query;