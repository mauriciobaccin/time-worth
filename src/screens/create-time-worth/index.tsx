import React, { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text';
import { SafeAreaView, View } from 'react-native';
import { Button, RadioButton, Subheading, Switch, Text, TextInput } from 'react-native-paper';

import { getTotalCost } from '~/helpers';

import styles from './styles';

function CreateTimeWorth(): JSX.Element {
  const [monthlyPayment, setMonthlyPayment] = useState('0');
  const [additionalValues, setAdditionalValues] = useState('0');
  const [additionalTypes, setAdditionalTypes] = useState('monthly');
  const [contractType, setContractType] = useState('');

  function calc() {
    console.log('Calculando... aguarde');

    const total = getTotalCost(Number(monthlyPayment), contractType);

    console.log('total: ', total);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginVertical: 16 }}>
        <Text>Informe o valor Bruto Mensal (Antes de descontos)</Text>
        <TextInput
          label="Valor Bruto Mensal"
          mode="outlined"
          value={monthlyPayment}
          onChangeText={setMonthlyPayment}
          keyboardType="numeric"
          render={(props) => <TextInputMask {...props} type="money" />}
        />
      </View>

      <View style={{ marginVertical: 16 }}>
        <Text>Todos os beneficios somados (ex: Alimentacao, Refeicao, Transporte...)</Text>
        <TextInput
          label="Beneficios"
          mode="outlined"
          value={additionalValues}
          onChangeText={setAdditionalValues}
          keyboardType="numeric"
          render={(props) => <TextInputMask {...props} type="money" />}
        />
        <View>
          <Text>Valor Mensal</Text>
          <Switch
            value={additionalTypes === 'monthly'}
            onValueChange={(value) => setAdditionalTypes(value ? 'monthly' : 'daily')}
          />
        </View>
      </View>

      <View style={{ marginVertical: 16 }}>
        <Subheading>Formato de contrato</Subheading>

        <RadioButton.Group onValueChange={setContractType} value={contractType}>
          <RadioButton.Item label="CLT" value="CLT" />
          <RadioButton.Item label="PJ" value="PJ" />
        </RadioButton.Group>
      </View>

      <View style={{ flex: 1, paddingBottom: 32, justifyContent: 'flex-end' }}>
        <Button mode="contained" onPress={calc}>
          $ Calcular $
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default CreateTimeWorth;
