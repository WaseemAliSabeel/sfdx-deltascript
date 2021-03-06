import { LightningElement, track } from 'lwc';

// Static Example Template for JSON Resume initial load
const baseJSONResume = {
    basics: {
        name: 'Waseem Ali Sabeel',
        label: 'Salesforce Specialist',
        picture: '/resources/WaseemAliSabeel.png',
        pictureComment:
            'The image path is from current hosted github repository. Third party URLs are blocked by CSP',
        email: 'wsabeel@gmail.com',
        phone: '(123) 456-7890',
        website: 'https://sfwiseguys.wordpress.com',
        summary:
            '18x Certified Salesforce Professional with extensive consulting experience as a Salesforce Solution Designer with a knack for designing, developing and delivering quality solutions on Salesforce Platform. 6+ Years of Work Experience. The go-to person to define and refine architecture. The go-to builder for most pressing Salesforce implementation projects. Capable to flawlessly communicate with technical and non-technical Client stakeholders. Proficient in App development, passionate Trainer and Mentor, and a certified Application & System Architect going onward and upward!',
        location: {
            street: '10880 Malibu Point',
            city: 'Los Angeles',
            state: 'California',
            postalCode: '90265',
            country: 'US'
        },
        profiles: [
            {
                network: 'Twitter',
                username: 'WaseemAliSabeel',
                url: 'http://twitter.com/WaseemAliSabeel'
            },
            {
                network: 'Github',
                username: 'WaseemAliSabeel',
                url: 'http://github.com/WaseemAliSabeel'
            },
            {
                network: 'LinkedIn',
                username: 'wsabeel',
                url: 'https://www.linkedin.com/in/wsabeel/'
            },
            {
                network: 'Trailhead',
                username: 'wsabeel',
                url: 'https://trailblazer.me/id/wsabeel'
            }
        ]
    },
    work: [
        {
            company: 'Deloitte Consulting USI',
            position: 'Specialist Senior',
            website: 'http://deloitte.com',
            startDate: '2020-09-01',
            endDate: '',
            summary:
                'Description of Work Roles here ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            highlights: [
                'Lead Solution Designer working on Salesforce Platform',
                'Team Lead for a Field Service Lightning Implementation',
                'Lightning Web Components Subject Matter Expert',
                'Passionate Salesforce Trainer and Mentor'
            ]
        },
        {
            company: 'Deloitte Consulting USI',
            position: 'Consultant',
            website: 'http://deloitte.com',
            startDate: '2017-09-01',
            endDate: '2020-08-31',
            summary:
                'Description of Work Roles here ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            highlights: [
                'Experienced Designer & Senior Developer of Platform Solutions meeting client requirements',
                'Lead Consultant working in a team of Salesforce professionals',
                'Learned ISV Product Packaging experience',
                'Delved deeper into attaining mastery of Salesforce Platform capabilities',
                'Became proficient on Lightning Web Components & Aura Components'
            ]
        },
        {
            company: 'Deloitte Consulting USI',
            position: 'Business Technology Analyst',
            website: 'http://deloitte.com',
            startDate: '2014-08-04',
            endDate: '2017-07-31',
            summary: 'Description of Work Roles and responsibilities ...',
            highlights: [
                'Worked on Salesforce CRM and gained technical insights',
                'Wrote lot of Quality Apex & Visualforce',
                'Understood Git fundamentals and Deployment lifecycle. Implemented 9 successful releases',
                'Well-versed with Agile methodology'
            ]
        }
    ],
    projects: [
        {
            company: 'Deloitte Consulting USI',
            position: 'Senior Salesforce Developer / Team Lead',
            website: 'https://www.deloitte.com',
            location: 'Hyderabad, India',
            startDate: '2016-05-01',
            endDate: '2017-05-01',
            summary:
                'Summary about the client work or Project Description here ... Built a Managed Package for multiple Life Science Industry clients and successfully published on AppExchange.',
            keywords: [
                'Requirements gathering',
                'Deployments',
                'Mulesoft Integration',
                'REST API'
            ]
        },
        {
            company: 'Universal Containers',
            position: 'Freelance Salesforce Developer',
            website: '',
            location: 'Titan, Saturn',
            startDate: '2015-05-01',
            endDate: '2016-04-01',
            summary:
                'Titan is the largest moon of Saturn and the second-largest natural satellite in the Solar System. It is the only moon known to have a dense atmosphere, and the only known body in space, other than Earth, where clear evidence of stable bodies of surface liquid has been found.',
            keywords: ['Dreamforce demo', 'SMS Integration', 'Mobile App']
        }
    ],
    education: [
        {
            institution: 'Vellore Institute of Technology',
            area: 'Computer Science and Engineering',
            studyType: 'B.Tech',
            location: 'Vellore, Tamil Nadu',
            startDate: '2010-05-01',
            endDate: '2014-06-01',
            gpa: '8.9',
            courses: ['Sample Course 1","Basic SQL']
        },
        {
            institution: "St. Paul's Sr Sec School",
            area: 'CBSE',
            location: 'Udaipur, Rajasthan',
            studyType: 'High School',
            startDate: '1999-01-01',
            endDate: '2010-01-01',
            gpa: '',
            courses: ['Science', 'Maths']
        }
    ],
    skills: [
        {
            name:
                'Proficient in Salesforce Configuration - Object Schema, Workflows, Process Builders, Flows, Approval Processes',
            level: 'Master',
            keywords: []
        },
        {
            name:
                'Salesforce Security Design using OWDs, Profiles, Permission Sets, Role Hierarchy, Sharing Rules, Manual & Apex Sharing',
            level: 'Master',
            keywords: []
        },
        {
            name: 'Salesforce Customization',
            level: 'Master',
            keywords: ['Apex', 'Visualforce', 'Aura', 'LWC']
        },
        {
            name: 'Salesforce Deployments',
            level: 'Master',
            keywords: ['Jenkins', 'Github', 'ANT', 'Change Sets']
        },
        {
            name: 'Working in Agile Methodology. DevOps projects',
            level: 'Master',
            keywords: []
        },
        {
            name: 'Tools',
            level: 'Master',
            keywords: ['SFDX', 'Workbench', 'Data Loader', 'Visual Studio Code']
        },
        {
            name: 'Programming Languages',
            level: 'Master',
            keywords: ['HTML', 'CSS', 'Javascript']
        },
        {
            name: 'Industry Experience',
            level: 'Master',
            keywords: ['Life Sciences', 'Public Sector', 'Energy and Resources']
        }
    ],
    languages: [
        {
            language: 'English',
            fluency: 'Business Fluency'
        },
        {
            language: 'Hindi',
            fluency: 'Native speaker'
        },
        {
            language: 'German',
            fluency: 'Foundational'
        }
    ],
    certifications: [
        {
            name: 'Salesforce Certified Application Architect',
            issuedDate: '2019-01-31'
        },
        {
            name: 'Salesforce Certified System Architect',
            issuedDate: '2020-06-25'
        }
    ],
    references: [
        {
            name: 'Jane Doe',
            title: 'President, Universal Containers',
            reference:
                "I've had the great pleasure of working with Waseem for the past three years at Deloitte, and on a few side projects. He has been with our projects through thick and thin. He is a phenomenal salesforce developer and a true team player. Highly recommended!"
        },
        {
            name: 'John Doe',
            title: 'CTO, Universal Containers',
            reference:
                'Hire this Guy ! Incredibly capable and fast. Plays well with others. Unbelievable at Salesforce customizations. Visionary. Hire him before I do.'
        }
    ],
    interests: [
        {
            name: 'Video Games',
            keywords: ['PC', 'Play Station']
        },
        {
            name: 'Movies',
            keywords: ['Hollywood', 'Sci-Fi']
        },
        {
            name: 'Gardening',
            keywords: []
        }
    ],
    volunteer: [
        {
            organization: 'Universal School for kids',
            position: 'Volunteer',
            website: 'https://salesforce.com/',
            startDate: '2018-01-01',
            endDate: '2018-05-01',
            summary: 'Description of Volunteering activities',
            highlights: ["Awarded 'Volunteer of the Month'"]
        },
        {
            organization: 'Universal Village',
            position: 'Lead Volunteer',
            website: 'https://salesforce.com/',
            startDate: '2017-11-01',
            endDate: '2017-12-01',
            summary: 'Description of Volunteering activities',
            highlights: []
        }
    ],
    awards: [
        {
            title: 'Excellence Award',
            date: '2020-12-01',
            awarder: 'Universal Containers',
            summary: 'Awarded for exemplary performance at work'
        },
        {
            title: 'Lightnathon Champion',
            date: '2019-12-01',
            awarder: 'Deloitte Consulting',
            summary:
                'First Prize awarded in Lightnathon Competition for building a reusable utility app'
        }
    ],
    publications: [
        {
            name: 'Dreamforce 2020 Guest Speaker',
            publisher: 'Dreamforce 2020',
            releaseDate: '2020-12-01',
            website: 'http://salesforce.com',
            summary: 'Description of the Presentation / Conference'
        },
        {
            name: 'White Paper on LWC',
            publisher: 'Salesforce',
            releaseDate: '2019-10-01',
            website: 'http://salesforce.com',
            summary: 'Description of the item'
        }
    ]
};

export default class Resume extends LightningElement {
    @track boolShowModal = false;
    @track boolShowPicture = true;
    @track resume = baseJSONResume;
    @track strResume = JSON.stringify(this.resume, null, 4);
    @track backupResume = baseJSONResume;
    @track error;
    COMMA_SPACE = ', ';
    QUOTATION = '"';
    darkMode = false;
    boolisRendered = false;

    /***** Getter Method to render error if Bad Resume JSON *****/
    get boolisResumeEmpty() {
        return this.resume && this.resume.basics ? false : true;
    }
    /***** To Print the Resume without the slds-no-print Sections *****/
    handlePrint() {
        window.print();
    }

    /***** To Toggle Visibility of the Display Picture on the Resume*****/
    togglePicture() {
        this.boolShowPicture = !this.boolShowPicture;
    }

    renderedCallback() {
        if (!this.boolisRendered) {
            this.checkMode();
            this.boolisRendered = true;
        }
    }

    /***** To Show the Edit Resume Modal *****/
    showModal() {
        this.strResume = JSON.stringify(this.resume, null, 4);
        this.boolShowModal = true;
    }

    /***** To Close the Edit Resume Modal *****/
    closeModal() {
        this.boolShowModal = false;
        this.error = '';
        this.checkMode();
    }

    /***** To Reset the Resume JSON back to the original Static Template *****/
    resetJSON() {
        this.resume = baseJSONResume;
        this.strResume = JSON.stringify(this.resume, null, 4);
        this.closeModal();
    }
    /***** To Revert the Resume JSON back to previously saved content, in case of error *****/
    revertJSON() {
        this.strResume = JSON.stringify(this.backupResume, null, 4);
        this.closeModal();
    }

    /***** To store the user entered modifications as stringified JSON *****/
    handleJSONchange(event) {
        this.strResume = event.currentTarget.value;
    }

    /***** To parse the user-entered stringified JSON upon Update and reflect the changes on HTML *****/
    handleUpdateJSON() {
        try {
            this.error = '';
            this.resume = JSON.parse(this.strResume);
            this.backupResume = JSON.parse(this.strResume);
            this.closeModal();
        } catch (e) {
            this.error = 'Please Provide valid JSON structure.  ' + e;
        }
    }

    /***** To toggle between light mode and dark mode CSS *****/
    toggleMode() {
        this.darkMode = !this.darkMode;
        this.checkMode();
    }

    /***** To check and switch Full HTML styles between Dark mode and Light mode *****/
    checkMode() {
        if (!this.darkMode) {
            // Remove Dark Mode styles
            Array.from(this.template.querySelectorAll('.bg-inverse')).forEach(
                (ele) => {
                    ele.classList.add('bg-not-dark');
                    ele.classList.remove('bg-inverse');
                }
            );
            Array.from(
                this.template.querySelectorAll('.slds-text-color_inverse')
            ).forEach((ele) => {
                ele.classList.add('regular-text');
                ele.classList.remove('slds-text-color_inverse');
            });
            Array.from(
                this.template.querySelectorAll('.slds-text-color_inverse-weak')
            ).forEach((ele) => {
                ele.classList.add('weak-text');
                ele.classList.remove('slds-text-color_inverse-weak');
            });
            Array.from(this.template.querySelectorAll('.utility-icon')).forEach(
                (ele) => {
                    ele.variant = 'base';
                }
            );
        } else {
            // Enable Dark Mode Styles
            Array.from(this.template.querySelectorAll('.bg-not-dark')).forEach(
                (ele) => {
                    ele.classList.add('bg-inverse');
                    ele.classList.remove('bg-not-dark');
                }
            );
            Array.from(this.template.querySelectorAll('.regular-text')).forEach(
                (ele) => {
                    ele.classList.add('slds-text-color_inverse');
                    ele.classList.remove('regular-text');
                }
            );
            Array.from(this.template.querySelectorAll('.weak-text')).forEach(
                (ele) => {
                    ele.classList.add('slds-text-color_inverse-weak');
                    ele.classList.remove('weak-text');
                }
            );
            Array.from(this.template.querySelectorAll('.utility-icon')).forEach(
                (ele) => {
                    ele.variant = 'inverse';
                }
            );
        }
    }
}