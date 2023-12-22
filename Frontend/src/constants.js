export const ROLES={
    AUTHOR_INDEX:0,
    REVIEWER_INDEX:1,
    list:['Author', 'Reviewer']
};
export const LINKS={
    HOME:'/',
    SIGNUP:'/signup',
    CREATE_ARTICLE:`/${ROLES.list[ROLES.AUTHOR_INDEX]}/create-article`,
    EDIT_ARTICLE:'edit-article'
}

export const SERVICE={
    BASE_URL:'http://localhost:3000/',
}