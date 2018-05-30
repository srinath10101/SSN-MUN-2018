import React, { Component } from 'react' 
import { Image } from 'react-bootstrap';
import {View} from 'react-native';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import {HashRouter} from 'react-router-dom';
import './Home.css';



export default class Home extends Component {
  render() {
    return (
      <View id="contai">
        <Image src="images/logo.jpg" className="header-image" />
        <div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> </div>
        
          <WhenInView>
            { ( isInView ) => 
            
            <RevealP hide={!isInView}>
            <div id="content"><p id="head"><h2>Letter from The Secretary General:</h2>
                Ladies and Gentlemen,
    
    On behalf of the organizing committee, it gives me immense pleasure to welcome you to SSN Model United Nations 2016.
    
    This is one of those times where the world is engaged in multiple issues which are a major concern for the future generations. Be it environmental protection, human rights violation, international security, unemployment or food security, the world has never been more threatened. The regional differences and a lack of consensus among the international community have further stimulated the issues to a large extent. The United Nations, in itself has been a catalyst of advocating change where hopes have been lost and efforts have failed. The very tool of diplomacy has facilitated enormous results in some of the extremely marginalized situations around the world. And these efforts have been made keeping in mind global geopolitics . And for the same, the very concept of Model United Nations exists.
    
    From the first edition in 2014 to the third edition now, it has been a wonderful journey of growth and learning. With innovative councils, a brilliant Executive Board and participants from across the country, there have been discussions and deliberations in hope of resolving, in their capacities some of the most pressing issues the world faces today. The 6 councils which are to be simulated at SSN MUN 2016 hold extreme importance and will surely give you immense exposure to the most prominent global issues and will help you realizing your role as a diplomat.
    
    I invite all of you to SSN MUN 2016 to experience three days of intense debate and deliberation.
    
    Yours sincerely,
    Radhakrishnan Venkataraman,
    Secretary General,
    SSN MUN 2016.         <br></br>
            </p>
            </div>
            </RevealP>

            }
        </WhenInView>
        
      </View>
    )
  }
}