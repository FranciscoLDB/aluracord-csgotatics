import {useRouter} from 'next/router';
export default function PaginaDoChat() {
    const roteamento = useRouter();
    return (
        <><input type="button" value={'teste'} onClick={function (indoprala){
            indoprala.preventDefault();
            roteamento.push('/la');
          }}></input>
        </>
    )
}