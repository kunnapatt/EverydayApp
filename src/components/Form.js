import React from 'react' ;
import { TextField, Grid, Button, IconButton } from '@material-ui/core' ;
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers' ;
import DateFnsUtils from '@date-io/date-fns' ;
import { Add, Remove } from '@material-ui/icons' ;
import axios from 'axios' ;

class Form extends React.Component {
   constructor(props) {
      super(props) ;
      this.state = {
         selectedDate: new Date(),
         inputFields: [{
            price: '',
            cost: ''
         }]
      }
      this.handleDateChange = this.handleDateChange.bind(this) ;
      this.handleClickAdd = this.handleClickAdd.bind(this) ;
      this.handleClickRemove = this.handleClickRemove.bind(this) ;
      this.handleSubmit = this.handleSubmit.bind(this) ;
      this.handleChangeInput = this.handleChangeInput.bind(this) ;
   }

   handleDateChange(date) {
      this.setState({selectedDate: date}) ;
   } ;

   handleClickAdd() {
      console.log("clicked Add") ;
      this.setState({inputFields: [...this.state.inputFields, [{price: '', cost: ''}]]}) ;
   }

   handleClickRemove() {
      console.log("clicked Remove") ;
      const value = [...this.state.inputFields] ;
      value.splice(value.length - 1, 1) ;
      this.setState({inputFields: value}) ;
   }

   handleSubmit(event) {
      event.preventDefault() ;
      console.log(this.state.selectedDate) ;
      console.log(this.state.inputFields) ;
      axios.post('') ;
   }

   handleChangeInput(index, event) {
      const value = [...this.state.inputFields] ;
      value[index][event.target.name] = event.target.value ;
      this.setState({inputFields: value}) ;
   }

   render() {
      return (
         <Grid
            container
            justify="center"
         >
            <Grid
               item
               xs={12}
            >
            <Grid
               container
               justify="center"
            >
               <h1> Hello World </h1>
            </Grid>
            <form onSubmit={this.handleSubmit}>
               <Grid 
                  container
                  justify="center"
               >
               <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                     disableToolbar
                     variant="inline"
                     format="dd/MM/yyyy"
                     margin="normal"
                     name="date-picker-inline"
                     id="date-picker-inline"
                     label="วันไหน"
                     value={this.state.selectedDate}
                     onChange={this.handleDateChange}
                     KeyboardButtonProps={{
                        'aria-label': 'change date',
                     }}
                  >

                  </KeyboardDatePicker>
               </MuiPickersUtilsProvider>
               <IconButton
                  onClick={this.handleClickAdd}
                  style={{margin: -10}}
               >
                  <Add />
               </IconButton>
               <IconButton
                  onClick={this.handleClickRemove}
                  style={{margin: -10}}
               >
                  <Remove />
               </IconButton>
               </Grid>
               {
                  this.state.inputFields.map((inputField, index) => {
                     return (
                     <Grid 
                     key={index}
                     container
                     justify="center"
                     >
                        <TextField
                           label="ราคา"
                           name="price"
                           value={inputField.price}
                           style={{paddingRight: 10}}
                           onChange={event => this.handleChangeInput(index, event)}
                        />
                        <TextField
                           label="ค่าใช้จ่าย"
                           name="cost"
                           value={inputField.cost}
                           onChange={event => this.handleChangeInput(index, event)}
                        />
                     </Grid>
                     ) ;
                  })
               }
               <Grid
                  container
                  justify="center"
                  style={{marginTop: 10}}
               >
                  <Button variant="contained" type="submit" color="primary">Submit</Button>
               </Grid>
            </form>
            </Grid>
         </Grid>
      )
   }
}

export default Form ;