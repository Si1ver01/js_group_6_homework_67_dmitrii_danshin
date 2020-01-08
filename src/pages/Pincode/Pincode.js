import React from "react";
import Button from "../../components/Button/Button";
import {connect} from 'react-redux'
import { colectionNumber } from "../../store/reduxAction";

const PARAMS = ['+','-','*','/','1','2','3','4', '5' , '6' , '7', '8' , '=' , '9' , '0' , 'c']

const Pincode = (props) => {
  return (
    <div className="mx-auto my-0 border border-secondary rounded w-25 text-center">
        <div className="form-group mx-5">
          <label htmlFor="pin">Input numbers</label>
          <input
            readOnly
            type="text"
            className="form-control"
            id="pin"
            placeholder="Input numbers"
            value={props.inputStr}
          />
        </div>
      <div className="row mx-5">
        {PARAMS.map(elem => <Button value={elem} buttonHandler={() => props.colectionNubmer(elem)} key={elem}/>)}
      </div>
      
    </div>
  );
};

function mapStateToProps (state){
  return{
    inputStr : state.numbers
  }
}

function mapDispatchToProps(dispatch){
  return{
    colectionNubmer : (nubmer) => dispatch(colectionNumber(nubmer))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Pincode);
