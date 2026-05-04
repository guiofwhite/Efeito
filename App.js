import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [mensagem, setMensagem] = useState('Carregando...');
  useEffect(()=>{
    setTimeout(()=>{setMensagem("Acredite em si mesmo e conquiste o impossível!");
    }, 5000);
  },[]);

  return (
    <View style={{alignItems:'center',fontSize: 80, marginTop: 50, backgroundColor: 'lightblue', padding: 20, borderRadius: 10}}>
      <Text style={{fontWeight:'bold'}}>{mensagem}</Text>
    </View>
  );
}
