import { ChatExamples } from "./ChatExamples"

import IconSunTwentyFour from "./icons/IconSunTwentyFour"
import IconLightningCharge from "./icons/IconLightingCharge"
import IconExclamationTriangle from "./icons/IconExclamationTriangle"

export const ChatPlaceholder = () => {
  return (
    <div className="m-5 mt-0 md:mt-52">
        <h3 className="text-4xl font-bold text-center my-10 text-white">ChatGPT Clone</h3>

        <div className="flex flex-col md:flex-row gap-5 m-auto mb-8 md:max-w-4xl">

            <ChatExamples
                title="Exemplo"
                exampleOne='"Explique a física quantica em termos simples"'
                exampleTwo='"Me dê ideias criativas para aniversário de 10 anos"'
                exampleThree='"Com eu faço uma requisição HTTP em JavaScript?"'
                icon={<IconSunTwentyFour width={24} height={24} className="mr-3 mb-2" />}
            />
            <ChatExamples
                title="Capacidades"
                exampleOne="Lembre-se do que o usuário disse mais cedo na conversa"
                exampleTwo="Permite que o usuário forneça correções de acompanhamento"
                exampleThree="Treinado para declinar requisições inapropriadas"
                icon={<IconLightningCharge width={24} height={24} className="mr-3 mb-2" />}
            />
            <ChatExamples
                title="Limitações"
                exampleOne="Ocasionalmente pode gerar informações incorretas"
                exampleTwo="Pode ocasionalmente produzir instruções prejudiciais ou conteúdo tendencioso"
                exampleThree="Conhecimento limitado do mundo e seus eventos depois de 2021"
                icon={<IconExclamationTriangle width={24} height={24} className="mr-3 mb-2" />}
            />

        </div>

    </div>
  )
}
