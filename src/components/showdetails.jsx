
export const Show=({user})=>{
  return (
    <>
      <img style={{
        width:"20%",
        height:"20%",
        borderRadius:"50%",
           marginTop:"4%" 

      }} src={user.data.avatar}></img>
      <h2>FirstName:  {user.data.first_name}</h2>
      <h2>LastName: {user.data.last_name}</h2>
      <h2>Email: {user.data.email}</h2>

      </>
  )
}