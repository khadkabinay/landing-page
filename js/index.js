
    // define global variables
    const navUl = document.querySelector('.nav-ul');
    const sectionList = document.querySelectorAll('section');
    const priceContainer = document.getElementsByClassName('price');
    const ratingContainer = document.getElementsByClassName('ratingSpan');
    const tourPara = document.querySelector('.tour-para');







    //generate lis and direct to each section when anchor is clicked

    const generateLis = () =>{
        let lis  = " ";
        sectionList.forEach(section => { 
        let sectionId = section.id
        let sectionName = section.dataset.nav
        lis += `<li><a href="#${sectionId}">${sectionName}</a></li>`
      return lis;
        });

        navUl.innerHTML = lis;

    };

    generateLis();



    // generate random number

    const NumGenerator = ()=>{
      return  Math.floor(Math.random() * 5 + 3 )
    }


    // create documentFragmet for tour detail
    const tourDetailFrag  = document.createDocumentFragment();

    const tourDetailCreate = ()=>{
      const tourDetails = ["woodland","downtown","splash", "movie park"]
      let randomNum = Math.floor(Math.random() * 3)
      let tourPlacesArr = tourDetails[randomNum]
      let textNode = document.createTextNode(`Have you ever visited ${tourPlacesArr} ?`)
      let fragElm = tourDetailFrag.appendChild(textNode)
      let paraTextContentElm = tourPara.appendChild(fragElm)

      
    }

      tourDetailCreate()





    // generate new  price and insert them into document

    const dayWeekPricePrint = ()=> {
        let price = NumGenerator()

      for(let i = 0; i < priceContainer.length;i++){
          priceContainer[i].innerHTML = `$ ${price}`
          price += 12;

      }

    }


    dayWeekPricePrint()




    // generating the random numbers for rating 

    const ratingNum = ()=>{
        let rating = NumGenerator();
          rating += 200;

        for(let i = 0; i < ratingContainer.length; i++){
            ratingContainer[i].innerHTML = `(${rating})`
            rating  += 85

        }

    }

    ratingNum()






    // creating for topOffSet value

    const pageOffsetCal =(section)=>{
        return Math.floor(section.getBoundingClientRect().top)

    }




    // add active class

    const activeCal = (section)=>{
        section.classList.add("active-class");
      }



    // remove active class
    const deActiveCal = (section)=>{
      section.classList.remove("active-class");
    }



    // add or remove the class if condition is met

    const checkViewPort = () =>{
          
        sectionList.forEach(section =>{
          let topOffSet = pageOffsetCal(section)
            if (topOffSet < 190 && topOffSet > -15){
                activeCal (section)
                }
              
                else{
                deActiveCal(section)
              }
          
        })
      
        }





    // add event listener  while scrolling
    window.addEventListener("scroll" , checkViewPort)