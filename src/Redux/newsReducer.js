import foto1 from '../image/news/foto.jpg';

const ADD_NEWS = 'ADD_NEWS';

let initialState = {
  arrNews: [
    {
      name: 'Do Whales Sleep?',
      date: '22-02-2022 16:27',
      photo: foto1,
      text: `Whales are mammals, so in many ways, they are just like human beings. 
            The most important difference is that humans and whales live in different environments and 
            whales have a special respiratory system that enables them to stay underwater for several 
            minutes without breathing oxygen. For this reason, they are said to be voluntary breathers. 
            That is, because of whales’ underwater environment, they must be conscious breathers. 
            They think about every breath they take and come up to the surface of the water to breathe through 
            blowholes on top of their heads.

            What is outstanding about whales is the way they can sleep. 
            While all mammals sleep, whales cannot afford to become unconscious for long because they may drown.
             The only way they can sleep is by remaining partially conscious. 
             It is believed that only one hemisphere of the whale’s brain sleeps at a time, 
             so they rest but are never completely asleep. They can do so most probably near the surface 
             so that they can come up for air easily.`,
      id: 1,
    },
    {
      name: 'The Great Wall of China',
      date: '20-03-2022 12:15',
      photo: foto1,
      text: `The Great Wall of China, one of the greatest wonders of the world, was first built between 
            220–206 BC. In fact, it began as independent walls for different states when it was first built, 
            and did not become the “Great” wall until the Qin Dynasty. Emperor Qin Shihuang succeeded in his 
            effort to have the walls joined together to serve as fortification to protect the northern borders 
            of the Chinese Empire from invasion. Afterwards it was rebuilt and maintained over the years, 
            between the 5th century BC and the 16th century.

            One of the myths associated with the Great Wall of China is that it is the only man-made 
            structure that can be seen from the Moon with the naked eye. The legend originated in 
            Richard Halliburton’s 1938 book Second Book of Marvels. However, this myth is simply not true. 
            Richard Halliburton’s claim was contradicted by astronauts Neil Armstrong and Yang Liwei. 
            A more plausible assumption would be to say that the Great Wall can be visible from a low 
            orbit of the Earth which is not unique in this regard as many other artificial constructions 
            can be seen from that height.`,
      id: 2,
    },
    {
      name: 'Education',
      date: '16-04-2022 06:29',
      photo: foto1,
      text: `Education encompasses both the teaching and learning of knowledge, 
            proper conduct, and technical competency. It thus focuses on the cultivation of skills, 
            trades or professions, as well as mental, moral & aesthetic development.

            Formal education consists of systematic instruction, teaching and training by professional teachers. 
            This consists of the application of pedagogy and the development of curricula.
            
            The right to education is a fundamental human right. Since 1952, 
            Article 2 of the first Protocol to the European Convention on Human Rights obliges all signatory 
            parties to guarantee the right to education. At world level, the United Nations’
            International Covenant on Economic, Social and Cultural Rights of 1966 guarantees this right under 
            its Article 13.
            
            Educational systems are established to provide education and training, often for children and 
            the young. A curriculum defines what students should know, understand and be able to do as the 
            result of education. A system of policies, regulations, examinations, structures and funding 
            enables teachers to teach to the best of their abilities. Sometimes educational systems can be 
            used to promote doctrines or ideals as well as knowledge, which is known as social engineering. 
            This can lead to political abuse of the system, particularly in totalitarian states and government.
            
            Primary (or elementary) education consists of the first years of formal, structured education. 
            In general, primary education consists of six or seven years of schooling starting at the age 
            of 5 or 6, although this varies between, and sometimes within, countries. Globally, around 70% 
            of primary-age children are enrolled in primary education, and this proportion is rising.
            
            In most contemporary educational systems of the world, secondary education consists of the 
            second years of formal education that occur during adolescence. It is characterized by transition 
            from the typically compulsory, comprehensive primary education for minors, to the optional, 
            selective tertiary, “post-secondary”, or “higher” education (e.g., university, vocational school) 
            for adults.
            
            Higher education, also called tertiary, third stage, or post secondary education, is the 
            non-compulsory educational level that follows the completion of a school providing a secondary
             education, such as a high school or secondary school. Tertiary education is normally taken to 
             include undergraduate and postgraduate education, as well as vocational education and training. 
             Colleges and universities are the main institutions that provide tertiary education. Collectively, 
             these are sometimes known as tertiary institutions. Tertiary education generally results in the 
             receipt of certificates, diplomas, or academic degrees.`,
      id: 3,
    },
    {
      name: 'Reassessing the Impacts of Brain Drain on Developing Countries',
      date: '03-05-2022 15:01',
      photo: foto1,
      text: `Brain drain, which is the action of having highly skilled and educated people leaving their 
            country to work abroad, has become one of the developing countries concern. Brain drain is also 
            referred to as human capital flight. More and more third world science and technology educated 
            people are heading for more prosperous countries seeking higher wages and better working conditions. 
            This has of course serious consequences on the sending countries.

            While many people believe that immigration is a personal choice that must be understood and 
            respected, others look at the phenomenon from a different perspective. What makes those educated 
            people leave their countries should be seriously considered and a distinction between push and pull 
            factors must be made. The push factors include low wages and lack of satisfactory working and 
            living conditions. Social unrest, political conflicts and wars may also be determining causes. 
            The pull factors, however, include intellectual freedom and substantial funds for research.
            
            Brain drain has negative impact on the sending countries economic prospects and competitiveness. 
            It reduces the number of dynamic and creative people who can contribute to the development of 
            their country. Likewise, with more entrepreneurs taking their investments abroad, developing 
            countries are missing an opportunity of wealth creation. This has also negative consequences 
            on tax revenue and employment.
            
            Most of the measures taken so far have not had any success in alleviating the effects of brain 
            drain. A more global view must take into consideration the provision of adequate working and 
            living conditions in the sending countries. Another option should involve encouraging the 
            expatriates to contribute their skill to the development of their countries without necessarily 
            physically relocating.`,
      id: 4,
    },
    {
      name: 'Mickey Mouse',
      date: '29-05-2022 13:20',
      photo: foto1,
      text: `LMickey Mouse is a cartoon character who has become an icon for the Walt Disney Company.
             Mickey Mouse is short for Mitchell Mouse. It was created in 1928 by Walt Disney and Ub Iwerks 
             and voiced by Walt Disney.

            The first appearance of Mickey Mouse was in Plane Crazy on May 15, 1928. But the Walt Disney
             Company celebrates Mickey Mouse birth as November 18, 1928 upon the release of Steamboat Willie, 
             because it is the first Mickey Mouse Cartoon with sound. The anthropomorphic mouse has developed 
             along the years. He first appeared in color in 1935. The first Technicolor Disney film was Flowers
             and Trees from 1932. He also evolved from being simply a character in animated cartoons and comic 
             strips to become one of the most recognizable symbols in the world.
            
            Mickey’s popularity has grown around the world. This was due to his angelic nature. 
            Mickey never does anything immoral. However, in 2009 the Walt Disney Company announced that they 
            will begin to re-brand the Mickey Mouse character by moving away from his pleasant, cheerful 
            image and reintroducing the more devious side of his personality, starting with the upcoming 
            Epic Mickey, a Mickey Mouse video game. The Walt Disney Company thus intends to show the 
            mischievous side of Mickey’s personality.`,
      id: 5,
    },
    {
      name: 'What does cloud computing mean?',
      date: '03-06-2022 19:06',
      photo: foto1,
      text: `Cloud computing means storing and accessing data and programs over the Internet instead 
            of your computer’s hard drive. It involves computing over a network, where a program or application 
            may run on many connected computers at the same time.

            For some, cloud computing is a metaphor for the Internet. It typically uses connected hardware 
            machines called servers. Individual users can use the server’s processing power to run an 
            application, store data, or perform any other computing task. Thus, instead of using a personal 
            computer every-time to run the application, the individual can now run the application from 
            anywhere in the world.
            
            For businesses, cloud computing is an ideal way to reduce expenses. For example, companies may 
            buy services in the cloud. That is to say, instead of installing applications on every single 
            computer in the company, cloud computing would allow workers to log into a Web-based service 
            (a cloud) which hosts all the programs individual users would need for their job. Everything 
            would run on remote machines and local computers task would rely just on connecting to those 
            machines.
            
            While cloud computing could change the entire computer industry, there are still some concerns 
            about the security of the data stored on the remote machines. It is true that it promises to 
            offload many tasks. However, this technology raises a fundamental question. Is it safe to 
            store one’s data on someone else’s computer? The cloud service provider needs to establish 
            clear and relevant policies that describe how the data of each cloud user will be accessed 
            and used. Cloud service users should also be able to encrypt data that is processed or stored 
            within the cloud to prevent unauthorized access.`,
      id: 6,
    },
  ],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return {
        ...state,
        arrNews: [...state.arrNews, action.data],
      };

    default:
      return state;
  }
};

export const addNews = (data) => {
  return { type: ADD_NEWS, data };
};

export default newsReducer;
