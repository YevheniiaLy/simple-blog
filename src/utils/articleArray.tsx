export type Article = {
    id: number
    theme: string
    title: string
    author: string
    date: string
    image: string
    text1: string
    text2: string
    text3: string
    textTitle: string
}
const articleArray: Article[] = [
    {
        id: 1,
        theme: 'Nature',
        title: 'GREEN CORNER IN MY HOME',
        author: 'Sally',
        date: 'June 7, 2023',
        image: '/images/article-id1.jpg',
        textTitle: '  LOVE WHAT YOU DO. DO WHAT YOU LOVE',
        text1: 'Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium quis, sem. ',

        text2: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumquer nihil impedit quo minus id quod maxime placeat facere. At vero eos et accusamus et iusto odio dignissimos ducimus quilor. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ',
        text3: ' eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer cidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae lorem.',
    },
    {
        id: 2,
        theme: 'Nature',
        title: 'MY BABY CACTUS',
        author: 'Sally',
        date: 'June 20, 2023',
        image: '/images/article-id2.jpg',
        textTitle: '  LOVE WHAT YOU DO. DO WHAT YOU LOVE',
        text1: 'Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium quis, sem. ',
        text2: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumquer nihil impedit quo minus id quod maxime placeat facere. At vero eos et accusamus et iusto odio dignissimos ducimus quilor. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ',
        text3: ' eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer cidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae lorem.',
    },
    {
        id: 3,
        theme: 'Nature',
        title: 'AMAZING NATURE OF IRELAND',
        author: 'Sally',
        date: 'April 21, 2023',
        image: '/images/article-id3.jpg',
        textTitle: '  LOVE WHAT YOU DO. DO WHAT YOU LOVE',
        text1: 'Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium quis, sem. ',
        text2: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumquer nihil impedit quo minus id quod maxime placeat facere. At vero eos et accusamus et iusto odio dignissimos ducimus quilor. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ',
        text3: ' eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer cidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae lorem.',
    },

    {
        id: 4,
        theme: 'Moments',
        title: 'TWINKLE TWINKLE LITTLE STAR',
        author: 'Sally',
        date: 'October 7, 2023',
        image: '/images/article-id4.jpg',
        textTitle: '  LOVE WHAT YOU DO. DO WHAT YOU LOVE',
        text1: 'Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium quis, sem. ',
        text2: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumquer nihil impedit quo minus id quod maxime placeat facere. At vero eos et accusamus et iusto odio dignissimos ducimus quilor. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ',
        text3: ' eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer cidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae lorem.',
    },

    {
        id: 5,
        theme: 'Moments',
        title: 'DAILY READING LISTS',
        author: 'Sally',
        date: 'October 8, 2023',
        image: '/images/article-id5.jpg',
        textTitle: '  LOVE WHAT YOU DO. DO WHAT YOU LOVE',
        text1: 'Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium quis, sem. ',
        text2: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumquer nihil impedit quo minus id quod maxime placeat facere. At vero eos et accusamus et iusto odio dignissimos ducimus quilor. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ',
        text3: ' eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer cidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae lorem.',
    },

    {
        id: 6,
        theme: 'Moments',
        title: 'DECORATE MY CORNER',
        author: 'Sally',
        date: 'May 7, 2023',
        image: '/images/article-id6.jpg',
        textTitle: '  LOVE WHAT YOU DO. DO WHAT YOU LOVE',
        text1: 'Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium quis, sem. ',
        text2: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumquer nihil impedit quo minus id quod maxime placeat facere. At vero eos et accusamus et iusto odio dignissimos ducimus quilor. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ',
        text3: ' eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer cidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae lorem.',
    },

    {
        id: 7,
        theme: 'Moments',
        title: 'WEEKEND COFFEE & MUSIC',
        author: 'Sally',
        date: 'April 15, 2023',
        image: '/images/article-id7.jpg',
        textTitle: '  LOVE WHAT YOU DO. DO WHAT YOU LOVE',
        text1: 'Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium quis, sem. ',
        text2: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumquer nihil impedit quo minus id quod maxime placeat facere. At vero eos et accusamus et iusto odio dignissimos ducimus quilor. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ',
        text3: ' eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer cidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae lorem.',
    },
    {
        id: 8,
        theme: 'Moments',
        title: 'ABANDONED PIECE OF SUMMER',
        author: 'Sally',
        date: 'May 8, 2023',
        image: '/images/article-id8.jpg',
        textTitle: '  LOVE WHAT YOU DO. DO WHAT YOU LOVE',
        text1: 'Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium quis, sem. ',
        text2: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumquer nihil impedit quo minus id quod maxime placeat facere. At vero eos et accusamus et iusto odio dignissimos ducimus quilor. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ',
        text3: ' eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer cidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae lorem.',
    },
    {
        id: 9,
        theme: 'Stories',
        title: 'GOOD MORNING COFFEE',
        author: 'Sally',
        date: 'Jully 7, 2023',
        image: '/images/article-id9.jpg',
        textTitle: '  LOVE WHAT YOU DO. DO WHAT YOU LOVE',
        text1: 'Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium quis, sem. ',
        text2: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumquer nihil impedit quo minus id quod maxime placeat facere. At vero eos et accusamus et iusto odio dignissimos ducimus quilor. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ',
        text3: ' eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer cidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae lorem.',
    },

    {
        id: 10,
        theme: 'Stories',
        title: 'TODAY IS PRESENT',
        author: 'Sally',
        date: 'May 10, 2023',
        image: '/images/article-id10.jpg',
        textTitle: '  LOVE WHAT YOU DO. DO WHAT YOU LOVE',
        text1: 'Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium quis, sem. ',
        text2: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumquer nihil impedit quo minus id quod maxime placeat facere. At vero eos et accusamus et iusto odio dignissimos ducimus quilor. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ',
        text3: ' eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer cidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae lorem.',
    },
    {
        id: 11,
        theme: 'Stories',
        title: 'CREATE YOUR DIY BAG',
        author: 'Sally',
        date: 'May 11, 2023',
        image: '/images/article-id11.jpg',
        textTitle: '  LOVE WHAT YOU DO. DO WHAT YOU LOVE',
        text1: 'Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium quis, sem. ',
        text2: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumquer nihil impedit quo minus id quod maxime placeat facere. At vero eos et accusamus et iusto odio dignissimos ducimus quilor. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ',
        text3: ' eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer cidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae lorem.',
    },

    {
        id: 12,
        theme: 'Stories',
        title: 'STORY OF A TRAVELER',
        author: 'Sally',
        date: 'May 12, 2023',
        image: '/images/article-id12.jpg',
        textTitle: '  LOVE WHAT YOU DO. DO WHAT YOU LOVE',
        text1: 'Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium quis, sem.',
        text2: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumquer nihil impedit quo minus id quod maxime placeat facere. At vero eos et accusamus et iusto odio dignissimos ducimus quilor. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ',
        text3: ' eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer cidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae lorem.',
    },
]
export const getArticleObject = (array: Article[]) =>
    array.reduce(
        (object, article) => ({
            ...object,
            [article.id]: article,
        }),
        {}
    )
export default articleArray
