const Container = ({ children, myValue }) => {
  return (
    <div>
        <h1>Esse é o meu container</h1>
        {children}
        {myValue}
    </div>
  )
}

export default Container