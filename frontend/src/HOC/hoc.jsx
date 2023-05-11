


export const hoc =(Component) => {
    const AuthComponent = (props) =>
    {
        return <Component {...props} />;
    }
  return AuthComponent;
    
}
