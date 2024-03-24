 declare type ReactNodeType = {
    type: string;
    props: {
        [key: string]: any,
        children: ReactNodeType[]
    },
}