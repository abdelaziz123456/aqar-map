import { ADD_PROPERTY,CLEAR_PROPERTIES,DELETE_PROPERTY } from "../Actions/types";

const initState=[
    {
        id:1,
        type:'flat',
        yearBuilt:2020,
        finishType:'Super Lux',
        view:'Nile',
        publishDate:'30/03/2021',
        price:'12,900,000 EGP',
        pricePerMeter:'60,000 EGP',
        paymentMethod:'Cash ',
        area:200,
        address:' 4 ibn kathir - Suez Canal Building ',
        roomNum:4,
        bathNum:1,
        apartFor:'sale',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        governorate:'Suez'

    },
    {
        id:2,
        type:'villa',
        yearBuilt:1993,
        finishType:'super lux',
        view:'main street',
        publishDate:'19/08/2021',
        price:'17,000,000 EGP',
        pricePerMeter:'8,095 EGP',
        paymentMethod:'Cash or Installments',
        area:2100,
        address:' Dr Hassanien Abd El-Qader St., Eighth District'
        ,
        apartFor:'sale',
        roomNum:10,
        bathNum:3,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        governorate:'Cairo'
        

    },
    {
        id:3,
        type:'flat',
        yearBuilt:2020,
        finishType:'lux',
        view:'Seaview',
        publishDate:'19/05/2021',
        price:'1,233,000  EGP',
        pricePerMeter:'9,000  EGP',
        paymentMethod:'Cash or Installments',
        area:137 ,
        address:'Hurghada'
        ,
        apartFor:'sale',
        roomNum:3,
        bathNum:1,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        governorate:'Red Sea'
        

    }
    ,
    {
        id:4,
        type:'Town House',
        yearBuilt:2021,
        finishType:'Semi Finished',
        view:'Garden',
        publishDate:'19/05/2021',
        price:'15,000   EGP',
        pricePerMeter:'14,000   EGP',
        paymentMethod:'Cash',
        area:202  ,
        apartFor:'rent',
        address:'Yaru Compound , New Capital Compounds'
        ,
        roomNum:3,
        bathNum:3,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        governorate:'Cairo'
        

    },
    {
        id:5,
        type:'flat',
        yearBuilt:2020,
        finishType:'super lux',
        view:'nile',
        publishDate:'30/03/2021',
        price:'10,000 EGP',
        pricePerMeter:'60,000 EGP',
        paymentMethod:'Cash ',
        area:200,
        address:' 4 ibn kathir - Suez Canal Building ',
        roomNum:4,
        bathNum:1,
        apartFor:'rent',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        governorate:'Suez'
        

    },
    {
        id:6,
        type:'villa',
        yearBuilt:1993,
        finishType:'super lux',
        view:'main street',
        publishDate:'19/08/2021',
        price:'17,000,000 EGP',
        pricePerMeter:'8,095 EGP',
        paymentMethod:'Cash or Installments',
        area:2100,
        address:' Dr Hassanien Abd El-Qader St., Eighth District'
        ,
        roomNum:10,
        bathNum:3,
        apartFor:'sale',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        governorate:'Cairo'

    },
    {
        id:7,
        type:'flat',
        yearBuilt:2020,
        finishType:'lux',
        view:'Seaview',
        publishDate:'19/05/2021',
        price:'8,000  EGP',
        pricePerMeter:'9,000  EGP',
        paymentMethod:'Cash ',
        area:137 ,
        address:'Hurghada'
        ,
        roomNum:3,
        bathNum:1,
        apartFor:'rent',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        governorate:'Red Sea'
        

    }
    ,
    {
        id:8,
        type:'Town House',
        yearBuilt:2021,
        finishType:'Semi Finished',
        view:'Garden',
        publishDate:'19/05/2021',
        price:'2,828,000   EGP',
        pricePerMeter:'14,000   EGP',
        paymentMethod:'Cash',
        area:202  ,
        address:'Yaru Compound , New Capital Compounds'
        ,
        roomNum:3,
        bathNum:3,
        apartFor:'sale',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        governorate:'Cairo'
        

    },
    {
        id:9,
        type:'flat',
        yearBuilt:2020,
        finishType:'super lux',
        view:'nile',
        publishDate:'30/03/2021',
        price:'12,000 EGP',
        pricePerMeter:'60,000 EGP',
        paymentMethod:'Cash ',
        area:200,
        address:' 4 ibn kathir - Suez Canal Building ',
        roomNum:4,
        bathNum:1,
        apartFor:'rent',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        governorate:'Suez'
        

    },
    {
        id:10,
        type:'villa',
        yearBuilt:1993,
        finishType:'super lux',
        view:'main street',
        publishDate:'19/08/2021',
        price:'30,000 EGP',
        pricePerMeter:'8,095 EGP',
        paymentMethod:'Cash ',
        area:2100,
        address:' Dr Hassanien Abd El-Qader St., Eighth District'
        ,
        roomNum:10,
        bathNum:3,
        apartFor:'rent',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        governorate:'Cairo'
        

    },
    {
        id:11,
        type:'flat',
        yearBuilt:2020,
        finishType:'lux',
        view:'Seaview',
        publishDate:'19/05/2021',
        price:'5,000  EGP',
        pricePerMeter:'9,000  EGP',
        paymentMethod:'Cash ',
        area:137 ,
        address:'Hurghada'
        ,
        roomNum:3,
        bathNum:1,
        apartFor:'rent',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        governorate:'Red Sea'
        

    }
    ,
    {
        id:12,
        type:'Town House',
        yearBuilt:2021,
        finishType:'Semi Finished',
        view:'Garden',
        publishDate:'19/05/2021',
        price:'11,000   EGP',
        pricePerMeter:'14,000   EGP',
        paymentMethod:'Cash',
        area:202  ,
        address:'Yaru Compound , New Capital Compounds'
        ,
        roomNum:3,
        bathNum:3,
        apartFor:'rent',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        governorate:'Cairo'
        

    },
    {
        id:13,
        type:'flat',
        yearBuilt:2020,
        finishType:'super lux',
        view:'nile',
        publishDate:'30/03/2021',
        price:'12,900,000 EGP',
        pricePerMeter:'60,000 EGP',
        paymentMethod:'Cash ',
        area:200,
        address:' 4 ibn kathir - Suez Canal Building ',
        roomNum:4,
        bathNum:1,
        apartFor:'sale',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        governorate:'Suez'
        

    },
    {
        id:14,
        type:'villa',
        yearBuilt:1993,
        finishType:'super lux',
        view:'main street',
        publishDate:'19/08/2021',
        price:'40,000 EGP',
        pricePerMeter:'8,095 EGP',
        paymentMethod:'Cash ',
        area:2100,
        address:' Dr Hassanien Abd El-Qader St., Eighth District'
        ,
        roomNum:10,
        bathNum:3,
        apartFor:'rent',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        governorate:'Cairo'
        

    },
    {
        id:15,
        type:'flat',
        yearBuilt:2020,
        finishType:'lux',
        view:'Seaview',
        publishDate:'19/05/2021',
        price:'7,500  EGP',
        pricePerMeter:'9,000  EGP',
        paymentMethod:'Cash',
        area:137 ,
        address:'Hurghada'
        ,
        roomNum:3,
        bathNum:1,
        apartFor:'rent',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        governorate:'Red Sea'
        

    }
    ,
    {
        id:16,
        type:'Town House',
        yearBuilt:2021,
        finishType:'Semi Finished',
        view:'Garden',
        publishDate:'19/05/2021',
        price:'2,828,000   EGP',
        pricePerMeter:'14,000   EGP',
        paymentMethod:'Cash',
        area:202  ,
        address:'Yaru Compound , New Capital Compounds'
        ,
        roomNum:3,
        bathNum:3,
        apartFor:'sale',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        governorate:'Cairo'
        

    }

]
;

const Properties=(state=initState,action)=>{
    let properties=[];
    if(action.type===ADD_PROPERTY){
        properties=[...state,
            action.property
        
            ]

        return properties
    }

    else if(action.type===DELETE_PROPERTY){

         properties=state.filter((prop)=>
             prop.id!==action.id
         )
         return properties
    }
    else if(action.type===CLEAR_PROPERTIES){
        properties=[];
        return properties
    }else{
        return state
    }



}

export default Properties