export default function managePosts(state = {
    projects: [],
    loading: false,
}, action) {


    switch (action.type) {

        case 'LOADING_PROJECTS':

            console.log('Loading Projects...')

            return {
                ...state,
                projects: [...state.projects],
                loading: true
            }

        // case 'ADD_PROJECTS':

        //     console.log(action.projects)
        //     const projects = action.projects

        //     return {
        //         ...state,
        //         projects: projects,
        //         loading: false
        //     }


        default:
            return state;
    }
};
