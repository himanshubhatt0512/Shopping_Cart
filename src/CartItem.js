import React from 'react';

class CartItem extends React.Component{

//  testing () {
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('done');
//       }, 5000);
//     })

//     promise.then(() => {
//       // setState acts like a synchronus call
//       this.setState({ qty: this.state.qty + 10 });

//       this.setState({ qty: this.state.qty + 10 });

//       this.setState({ qty: this.state.qty + 10 });

//       console.log('state', this.state);
//     });
//   }

    increaseQuatity=()=> {
        //this.state.qty +=1;
        //console.log('this.state', this.state);
        
        //setState form 1
        // this.setState({
        //     qty: this.state.qty +1
        // },() =>{
        //     console.log('this.stae', this.state)
        // });

        //setState form 2 - if you require previous state
        this.setState((prevState) =>{
            return{
                qty : prevState.qty +1
            }
        },() =>{
            console.log('this.state', this.state)
        });
       
    }

    decreaseQuatity = ()=>{
        console.log("this.state", this.state);

        this.setState ((prevState)=>{
            const val = prevState.qty;
            if(val ===0){
                return 0;
            }else{
                return{        
                    qty : prevState.qty -1  
            }
            }
            
        })
    }

    render(){
        console.log("this.props", this.props);
        const { price, title, qty }= this.props.product;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <br></br>
                    <div className='cart-item-action'>
                        {/*Button */}
                        <img 
                            alt='increase'
                            className='action-icons'
                            src='https://cdn-icons-png.flaticon.com/512/992/992651.png' 
                            onClick={this.increaseQuatity}
                         />
                        <img 
                            alt='decrease' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/992/992683.png' 
                            onClick={this.decreaseQuatity}

                        />
                        <img 
                            alt='delete' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/484/484662.png' 
                        />
                    </div>
                </div>
            </div>

        );
    }
}

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;