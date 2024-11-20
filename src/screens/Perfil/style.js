import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {              
        width: "100%",        
        top: 0,
        position: "absolute", 
        alignItems: "center",  
    },    

  header: {  
    backgroundColor: "#c8f1f9",
    width: "100%",    
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
    fontSize: 35,
    fontWeight: "bold",
    color: "#000",
    position: "absolute",
    top: 240,       
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
    color: "#504e50",
    textAlign: "center",
    marginTop: 20,
  },

  texto: {
    fontSize: 21,
    color: "#000",
    fontWeight: "bold",  
     marginTop: 5,
  },

  button: {
    flexDirection: "row", 
    justifyContent: "space-around", 
    width: "80%",   
    borderRadius: 50,   
    marginTop: 50,  
    marginHorizontal: 60,    
  },

  buttonSeguir: {
    backgroundColor: '#808080',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  buttonAguendar: {
    backgroundColor: 'red',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },

  palavra: {
    fontSize: 38,
    color: "#000",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,        
},

  fotos: {
    flexDirection: "row",
    justifyContent: "space-between",  
    width: "100%",                   
    paddingHorizontal: 10,      
  
 },

  fotosImage: {    
      width: 150,
      height: 190,
      borderRadius: 10, 
      marginHorizontal: 10,     
  },

  scrollView: {
    width: "100%", 
},
  
  categorias: {
    fontSize: 33,
    color: "#000",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  cat: {
    flexDirection: "row",
    justifyContent: "space-between",  
    width: "100%",                   
    paddingHorizontal: 10,      
  },

 catImage: {    
  width: 90,
  height: 90,
  borderRadius: 600, 
  marginHorizontal: 10,     
},



});
