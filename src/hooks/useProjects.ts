import useSkills from './useSkills'

export default function useProjects() {
    const projects = [
        {
            id: 1,
            title: 'Project con nombre suepr super super mega largo',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus odio velit, lobortis eu sapien at, rhoncus posuere neque. Nam maximus efficitur imperdiet. Sed rhoncus dignissim nulla a tincidunt. Sed volutpat pulvinar ultricies. Suspendisse sodales sed massa nec lacinia. Aenean molestie nisl et eros fringilla eleifend. Proin quis pharetra elit. Proin sem ligula, scelerisque nec auctor sed, vulputate vel sem. Praesent ante massa, pellentesque non eleifend in, vulputate vitae risus. Integer porttitor metus in vestibulum vulputate. Phasellus nisl diam, scelerisque et porttitor et, blandit vel felis. Nulla a diam suscipit ipsum efficitur facilisis in non sapien. Aenean sit amet hendrerit eros. Integer finibus lacus sit amet odio eleifend, et interdum urna cursus. Duis vulputate mi suscipit cursus suscipit.
    
    Proin vel fringilla lacus. Sed et dolor risus. Mauris in elementum sapien, quis varius nibh. Ut sagittis bibendum sollicitudin. Nullam non laoreet nulla. Quisque consequat sapien risus, a varius dui vestibulum nec. Vestibulum vestibulum aliquet magna non porttitor. Aenean fringilla nisi mi, non efficitur tellus placerat quis. Sed ex elit, mollis nec magna ut, pharetra tempus est. Morbi consequat, felis a rutrum volutpat, dui enim faucibus mi, id bibendum lorem velit eu arcu. Nulla facilisi.
    
    Ut cursus nec eros quis semper. Maecenas eros felis, vehicula nec magna sit amet, condimentum mollis massa. Praesent diam ex, placerat eu ipsum non, hendrerit hendrerit diam. In et ex diam. Sed sollicitudin quam in metus vehicula tincidunt. Cras ac ante turpis. Sed mollis tincidunt magna, cursus interdum neque varius vitae. In rutrum consequat erat sit amet consequat. Maecenas ac odio sed ante mollis egestas ut ut nulla.
    
    Curabitur lacinia, arcu eget euismod congue, nibh tortor consectetur diam, a tristique lacus elit eu dui. Morbi maximus viverra euismod. Aliquam vel metus auctor, eleifend odio vel, faucibus ipsum. Nulla vulputate eget ante non sodales. Aenean venenatis lacus consectetur vehicula sodales. Sed ac libero vel velit faucibus dignissim. Sed nec scelerisque mauris. Nunc et ligula ac odio elementum suscipit.
    
    Aliquam aliquet urna magna, a fringilla tortor lacinia volutpat. Nunc rutrum odio neque, vitae scelerisque lorem vehicula id. Sed non volutpat arcu. Praesent tellus lacus, rutrum id tempor sed, venenatis at odio. Praesent risus ex, vulputate eu risus nec, ornare fringilla dolor. Sed condimentum quam ipsum, faucibus bibendum eros commodo vel. Donec ultricies elit quis augue dignissim, at faucibus elit faucibus. Duis nunc velit, pellentesque ac orci et, gravida rhoncus lorem. Maecenas a finibus mi. Integer fringilla libero sed magna pretium, sed tempus nisl eleifend. Pellentesque luctus dapibus sodales. Integer condimentum ante et tincidunt blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam condimentum nisl non luctus dictum. Ut ex erat, sagittis ultricies feugiat sit amet, sagittis vel orci. Pellentesque sit amet erat aliquam, luctus lorem in, imperdiet purus.
    
    Nulla sagittis tellus viverra, vestibulum erat sed, aliquam nisi. Quisque vitae porttitor leo. Aliquam molestie aliquam ligula, sit amet tempor ante aliquet eget. Pellentesque tempor mi tortor, vel dictum leo tincidunt et. Maecenas lacinia maximus metus, a ornare risus. Nunc tincidunt purus orci, eget consectetur lectus sagittis vitae. Donec fringilla est sit amet viverra dignissim. Pellentesque tristique ligula sit amet justo mattis convallis. Nulla luctus nunc ut nisi aliquam facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    
    Nulla facilisi. Ut imperdiet tortor at enim tempus porta. Praesent iaculis enim in magna placerat, sollicitudin lobortis mi maximus. Maecenas vitae rutrum massa. In cursus sed justo ac mollis. Nullam tincidunt urna nisl, a molestie velit dapibus vel. Aliquam sed nisl ut nisl pulvinar fermentum et et nibh. Sed venenatis nisi ut fermentum fringilla. Donec in lorem eu magna luctus porta eu quis dui. Maecenas porta tellus sit amet velit tincidunt, pharetra condimentum justo pharetra. Nullam fermentum congue orci ac volutpat. Duis porta erat felis, vel consectetur mi fringilla aliquet. Morbi nunc leo, dignissim et lectus id, rhoncus luctus ante. Sed auctor neque porttitor luctus fringilla. In ultricies ante quis nibh pulvinar, in ornare nisl hendrerit. Cras eleifend ligula eget velit finibus, in consectetur est fringilla.
    
    Vestibulum semper laoreet sapien non sollicitudin. Nam euismod sed nunc sit amet dictum. Praesent dignissim sapien arcu, auctor aliquet sem suscipit ut. Maecenas molestie maximus hendrerit. Praesent accumsan mi bibendum lacus lacinia, quis euismod sapien pellentesque. Quisque vel dictum urna. Fusce eu felis lacus. Proin tincidunt sit amet quam a malesuada. Quisque nulla orci, egestas eget sagittis at, tincidunt sit amet lacus. Phasellus eu tincidunt est. Morbi ultricies felis sit amet purus tincidunt finibus. Morbi placerat vehicula erat non mollis. Proin eu purus et urna pellentesque scelerisque. Nulla id dapibus quam.
    
    Ut ullamcorper cursus mi sit amet fermentum. Nunc rhoncus ornare ex id tempus. Nulla facilisi. Duis ac laoreet nunc. In consequat eu ipsum id ornare. Curabitur sed tincidunt diam. Nunc malesuada vestibulum risus gravida pulvinar. Sed tempor mollis gravida. Aliquam posuere nunc sed quam condimentum tincidunt. Donec quis elementum mauris, ultricies dictum nisi.
    
    Nam condimentum augue eu magna eleifend gravida. Vestibulum eget cursus dolor. Integer diam odio, facilisis a lacus in, congue tincidunt augue. Phasellus consequat dui pharetra elementum facilisis. Integer in mattis leo, at fringilla risus. Aliquam ante dolor, porttitor vitae placerat tempor, cursus ac tortor. Aliquam blandit dolor sagittis ligula viverra, non faucibus eros eleifend. Suspendisse potenti. Maecenas efficitur, metus nec vulputate semper, sapien mi posuere diam, at bibendum nulla eros vel tellus. Ut tincidunt ligula a erat euismod interdum.`,
            image: '',
            link: '',
            languages: ['Javascript', 'Python']
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Esto es un proyecto de prueba',
            image: '',
            link: '',
            languages: ['Javascript', 'Java']
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'Esto es un proyecto de prueba',
            image: '',
            link: '',
            languages: ['C', 'C#']
        },
        {
            id: 4,
            title: 'Project 4',
            description: 'Esto es un proyecto de prueba',
            image: '',
            link: '',
            languages: ['Node Js', 'C++']
        },
        {
            id: 5,
            title: 'Project 5',
            description: 'Esto es un proyecto de prueba',
            image: '',
            link: '',
            languages: ['React', 'Flutter', 'Kotlin']
        },
        {
            id: 6,
            title: 'Project 6',
            description: 'Esto es un proyecto de prueba',
            image: '/images/unnamed.jpg',
            link: 'https://github.com/irubenboy/react-examples',
            languages: []
        }
    ]
    const { skills } = useSkills()

    const toImages = (languages: string[]) => {
        return skills
            .filter(({ title }) => languages.includes(title))
    }

    const languages = [
        ...new Set(
            projects
                .map(({ languages }) => languages)
                .reduce((acc, item) => [...acc, ...item])
        )
    ]

    return { projects, languages, toImages }
}
