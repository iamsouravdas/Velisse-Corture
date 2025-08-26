export interface navigationInterface {
    optionName: string,
    routePath: string,
}

export const navigation: navigationInterface[] = [
      {
        optionName: 'New Arrival',
        routePath: "/new-arrival"
    },
    {
        optionName: 'Men',
        routePath: "/men"
    },
    {
        optionName: 'Women',
        routePath: "/women"
    },
    {
        optionName: 'Kids',
        routePath: "/kids"
    },
    {
        optionName: 'Home',
        routePath: "/home"
    },
    {
        optionName: 'Beauty',
        routePath: "/beauty"
    },

]