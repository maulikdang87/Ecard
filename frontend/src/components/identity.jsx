


export function Identity({persons}){
  
    const buttonStyle = {
        backgroundColor: "#3273a8",
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',  
        cursor: 'pointer',
        margin : "10px"
      };
    return <div>
       
        <h2>{persons.name}</h2><br />
        <h3>{persons.description}</h3><br />

        <h2><b>Interests : </b></h2> <br />
        <h4>{persons.interests}</h4>

        <button style={buttonStyle}>
            LinkedIn
        </button>
        <button style={buttonStyle}>
            Twitter
        </button>
    
    </div>
}

