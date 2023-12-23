export const ROLES={
    AUTHOR_INDEX:0,
    REVIEWER_INDEX:1,
    ADMIN_INDEX:2,
    list:['Author', 'Reviewer', 'Admin']
};
export const LINKS={
    HOME:'',
    SIGNUP:'/signup',
    CREATE_ARTICLE:`${ROLES.list[ROLES.AUTHOR_INDEX]}/create-article`,
    EDIT_ARTICLE:`/${ROLES.list[ROLES.ADMIN_INDEX]}/edit-article`
}

export const SERVICE={
    BASE_URL:'http://localhost:5000/api/',
    USER_API: 'user'
}

export const ARTICLE_STATES={
    PUBLISHED: 'Published',
    PENDING: 'Pending',
    REJECTED: 'Rejected'
}