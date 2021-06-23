import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/actions/cakeAction'
import { buyIceCream } from '../redux/actions/icecreamAction'
import { fetchUsers } from '../redux/actions/usersAction'

function CakeContainer({props}) {

    // const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    // const numOfIceCream = useSelector((state) => state.icecream.numOfIceCream)
    const users = useSelector((state) => state.users)
    // const [number, setnumber] = useState(1)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
        
    }, [])

    return (
        <div className='center'>

            {
                users.loading ? 
                <h2>Loading....s</h2>
                :
                users.error ? 
                <h2>{users.error}</h2>
                :
                <div>
                    <h2>Users List </h2>
                    <div>
                        {
                            users.users.map(item=>(
                                <p key={item}>{item.name}</p>
                            ))
                        }
                    </div>
                </div>
            }
            {/* <h2>Number of Cakes - {numOfCakes}</h2>
            <input type="text" value={number} onChange={e=>setnumber(e.target.value)}/>
            <button onClick={()=>{dispatch(buyCake(number))}}>Buy {number} Cake</button> */}
            {/* <h2>Number of Icecreams - {numOfIceCream}</h2>
            <button onClick={()=>{dispatch(buyIceCream())}}>Buy IceCream</button> */}

        </div>
    )
}



export default CakeContainer
