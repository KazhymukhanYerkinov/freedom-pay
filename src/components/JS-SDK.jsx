import React from 'react';


export const JS_SDK = () => {

    // Секретный ключ для выплат клиентам 
    let key_1 = '';

    // Секретный ключ для приема платежей (mypublickey)
    let key_2 = '';

    // (mytoken)
    let token = '';


    React.useEffect(() => {
        FreedomPaySDK.setup(key_2, token);
    }, []);

    const pay = async () => {

        const JSTokenizeOptionsBankCard = {
            type: 'bank_card',
            options: {
                card_number: "4444444444444422",
                card_holder_name: "test",
                card_exp_month: "12",
                card_exp_year: "24",
            }
        };
    
        try {
            const JSTokenResponse = await FreedomPaySDK.tokenize(JSTokenizeOptionsBankCard);
            console.log({ JSTokenResponse });
        } catch (JSErrorObject)  {
          console.log({ JSErrorObject });
        }
    
    }

    return (
        <React.Fragment>
            <div id='3dsForm' />
            <button style={{ width: '200px', height: '50px' }} onClick={pay}> pay </button>
        </React.Fragment>
    );
}