import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#c8f1f9",
        width: "100%",
        height: 180,
        top: 0,
        position: "absolute", 
        alignItems: "center",  
    },    

  header: {     
    height: 180,        
    alignItems: "center",    
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,   
    position: "absolute",
    top: 125,  
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
    position: "absolute",
    top: 240, 
    textAlign: "center", 
  },

  status: {
    flexDirection: "row", 
    justifyContent: "space-around", 
    width: "100%",
    marginTop: 120,   
  },

  numero: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#cc36f2",
    textAlign: "center",
  },

  texto: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 1,
  },

  button: {
    flexDirection: "row", 
    justifyContent: "space-around", 
    width: "60%",   
    marginTop: 50,  
    marginHorizontal: 10,   
  },

  buttonSeguir: {
    backgroundColor: '#808080',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  buttonAguendar: {
    backgroundColor: 'red',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },

  palavra: {
    fontSize: 24,
    color: "#000",
    fontWeight: "bold",    
    marginTop: 50,
    textAlign: "left",  
  },

  fotos: {
    width: "50%",
    height: 150,    
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around", 
           
  },
  fotosImage: {
    width: "80%", 
    height: 100,
    borderRadius: 10, 
    marginBottom: 15, 
    alignSelf: "center", // Centralizar as fotos na vertical
  },

  card : {    
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    width: "90%",
    
  },
  
//   cardsContainer: {
//     backgroundColor: "orange",

//   },
});
