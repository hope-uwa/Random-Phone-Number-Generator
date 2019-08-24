import React, {Component} from 'react';
import FileSaver from 'file-saver'
import './App.css';
import Header from './components/header';
import NumberDisplay from './components/numberDisplay'
import BottomSection from './components/bottomSection'
import { Grid } from '@material-ui/core';
import { generateNumbers, sortData } from './utils'

export class App extends Component{
  state = {
    data : [],
    sorted : [],
    highest: undefined,
    lowest: undefined,
    isAscending: true

  }



  handleGenerate = (amount) => {
    const newNumbers= generateNumbers(amount);
    const { sorted, maxNumber, minNumber, data }= newNumbers;
    this.setState({ highest: maxNumber, lowest: minNumber, sorted, data })    
  }
  
  toggleSort = () => {
    const { data, isAscending } = this.state
    const { sorted } = sortData(data, isAscending);
    this.setState({isAscending: !isAscending, sorted })

  }

  download = () => {
    const { sorted } = this.state
    var blob = new Blob(sorted, {type: "text/plain;charset=utf-8"});
    const fileName = `Generated_on_${new Date().toTimeString()}`
    FileSaver.saveAs(blob, fileName);
  }
  

  render(){
    const { highest, lowest, isAscending, sorted} = this.state
    return (
    <Grid style={{height: '100vh'}}>
      <Header handleGenerate={this.handleGenerate}/>
      <NumberDisplay data={sorted} />
      <BottomSection 
        style={{ position: 'fixed', bottom: 0}}
        download={this.download}
        ascending={this.ascendingSort}
        descending={this.descendingSort}
        highest= {highest}
        lowest={lowest}
        isAscending={isAscending}
        toggleSort={this.toggleSort}

        />
    </Grid>)
  }
}

export default App;
