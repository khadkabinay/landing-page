
        // define global variables
        const NAV_UL           = document.querySelector('.nav-ul');
        const SECTION_LIST     = document.querySelectorAll('section');
        const PRICE_CONTAINER  = document.getElementsByClassName('price');
        const RATING_CONTAINER = document.getElementsByClassName('ratingSpan');
        const TOUR_PARA        = document.querySelector('.tour-para');
        







        //generate lis and direct to each section when anchor is clicked

        const generateLis = () =>{
                let lis  = " ";
                SECTION_LIST.forEach(section => { 
                  let sectionId   = section.id
                  let sectionName = section.dataset.nav
                  lis += `<li class ="nav-link"><a href="#${sectionId}">${sectionName}</a></li>`
                      return lis;
                  })

            NAV_UL.innerHTML = lis;

        };

          generateLis();



        // generate random number

        const NumGenerator = ()=>{
              return  Math.floor(Math.random() * 5 + 3 )
        };


        // create documentFragmet for tour detail
        const TOUR_DETAIL_FRAG  = document.createDocumentFragment();

        const tourDetailCreate = ()=>{
              const TOUR_DETAILS = ["woodland","downtown","splash", "movie park"]
              let randomNum      = Math.floor(Math.random() * 3)
              let tourPlacesArr  = TOUR_DETAILS[randomNum]
              let textNode       = document.createTextNode(`Have you ever visited ${tourPlacesArr} ?`)
              let fragElm        = TOUR_DETAIL_FRAG.appendChild(textNode)
              TOUR_PARA.appendChild(fragElm)

              
            };

          tourDetailCreate();





        // generate new  price and insert them into document

        const dayWeekPricePrint = ()=> {
              let price = NumGenerator()

          for(let i = 0; i < PRICE_CONTAINER.length;i++){
                PRICE_CONTAINER[i].innerHTML = `$ ${price}`
              price += 12;

          }

        };


        dayWeekPricePrint()




        // generating the random numbers for rating 

        const ratingNum = ()=>{
            let rating = NumGenerator();
              rating += 200;

            for(let i = 0; i < RATING_CONTAINER.length; i++){
                RATING_CONTAINER[i].innerHTML = `(${rating})`
                rating  += 85

            }

        };

        ratingNum();





        // add active class

        const activeCal = (section)=>{
            section.classList.add("active-class");
          };



        // remove active class
        const deActiveCal = (section)=>{
            section.classList.remove("active-class");
      };





        // add or remove the active class from each section and navbar menu if condition is met

        const checkViewPort = () =>{
          const NAV_BAR_LIS  = document.querySelectorAll(".nav-link");
              SECTION_LIST.forEach((section , index) => {
                    let eachSection   =  section.getBoundingClientRect()
                    let sectionTop    = eachSection.top
                    let sectionBottom = eachSection.bottom
                
                if ( sectionTop <= 230 && sectionBottom >= 230 ) {
                      activeCal (section)

                  // adding active class on lis
                      NAV_BAR_LIS[index].classList.add("active-nav");
              
                } else {
                      deActiveCal(section)

                  // removing active class from lis
                    NAV_BAR_LIS[index].classList.remove("active-nav");
                  
                }

              })
      
          
            };





        // add event listener  while scrolling
        window.addEventListener("scroll" , checkViewPort);