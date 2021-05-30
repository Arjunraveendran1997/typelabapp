import React from 'react'
import Challengesection from '../Challengesection/Challengesection'
import Footer from '../Footer/Footer'
import Landing from '../Landing/Landing'
import Nav from '../Nav/Nav'
import {SAMPLE_PARAGRAPHS} from './../../data/Sampleparagraph'
import './App.css'


const totaltime=60
const apiurl="http://metaphorpsum.com/paragraphs/1/9"
const defaultstate= {
    selectedparagraph:"",
    timerstarted:false,
    timeremaining:totaltime,
    words:0,
    characters:0,
    wpm:0,
    textinfo:[],
}

class App extends React.Component {
    state= defaultstate
fetchnewparagraphfallback=()=>{
    const data = SAMPLE_PARAGRAPHS[
        Math.floor(Math.random()* SAMPLE_PARAGRAPHS.length)
    ];
    const selectedparagrapharray = data.split("")
        
    const textinfo=selectedparagrapharray.map(
        (selectedletter)=>{
        return{
          textletter:selectedletter,
            status:"notattemted",
    }
    })
    this.setState({...defaultstate,textinfo, selectedparagraph:data,})
    

}



 fetchnewpage=()=>{
    fetch(apiurl)
    .then((response)=>response.text())
    
    .then((data)=>{
     
        
        const selectedparagrapharray=data.split("")
        
        const textinfo=selectedparagrapharray.map(
            (selectedletter)=>{
            return{
              textletter:selectedletter,
                status:"notattemted",
        }
        })
        this.setState({...defaultstate,textinfo, selectedparagraph:data})
        
    }) 

 } 

 componentDidMount (){
       
       this.fetchnewparagraphfallback()
}

startagain = ()=>{
    this.fetchnewparagraphfallback()
}

starttimer=()=>{
    this.setState({timerstarted:true})
    const timer= setInterval(()=>{
        if(this.state.timeremaining > 0){
        const timespend=totaltime - this.state.timeremaining
        const wpm=timespend > 0
        ? (this.state.words / timespend) * totaltime
        : 0;
            this.setState({
           
            timeremaining:this.state.timeremaining - 1,
            wpm:parseInt(wpm)
        
        })
    } else{
        clearInterval(timer)
    }
    },1000)
}




    handleuserinput=(inputvalue)=>{
        if(!this.state.timerstarted) this.starttimer()


        const characters=inputvalue.length
        const words=inputvalue.split(" ").length
        const index=characters - 1
        if(index <0){
            this.setState({
                textinfo:[
                    {
                    textletter:this.state.textinfo[0].textletter,
                    status:"notattemted"
                    },
                    ...this.state.textinfo.slice(1),
                    

                   
                ],
                characters,
                words
            })
            return
            
        }
        if(index >= this.state.selectedparagraph.length){
            this.setState({characters,words})
            return
        }
        const textinfo=this.state.textinfo
        if(!(index === this.state.selectedparagraph.length-1))
        textinfo[index + 1].status = "notattemted";

        const iscorrect = inputvalue[index]===textinfo[index].textletter

        textinfo[index].status = iscorrect ? "correct" : "incorrect"

        this.setState({
            textinfo,
            characters,
            words,
            
        })
    }
    

  

    render() {
      
        return(
           <div className="app">
           <Nav />
           <Landing/>
           <Challengesection
            selectedparagraph={this.state.selectedparagraph}
            words={this.state.words}
            characters={this.state.characters}
            wpm={this.state.wpm}
            timeremaining={this.state.timeremaining}
            timerstarted={this.state.timerstarted} 
            textinfo={this.state.textinfo}
            oninputchange={this.handleuserinput}
            startagain = {this.startagain} />
           <Footer/>
           </div>
        )
    }
}

export default App