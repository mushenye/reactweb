const Button = ({ children, backgroundColor }) => {
  return <button style={{ backgroundColor }}>{children}</button>;
};
const DeleteButton=()=>{
    return <Button backgroundColor="red">Delete</Button>
}

const Model=({children}) =>{
    return (
        <>
        <div className="Overlay"></div>
        <div className="Alert"></div>
        </>
    )
}

export default Model