"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Clock, Users, AlertCircle, X, Check } from "lucide-react"

export default function AcessoPage() {
  const [vagas, setVagas] = useState(20)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (vagas > 15) {
        setVagas((prev) => prev - 1)
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [vagas])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Platform Presentation */}
      <div className="py-4 sm:py-8 px-3 sm:px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          {/* Title */}
          <h1 className="text-lg sm:text-2xl font-black text-black mb-2 sm:mb-3 text-center leading-tight">
            GUIA DEFINITIVO E<br />
            ATUALIZADO NAS NOVAS
            <br />
            REGRAS
          </h1>

          {/* Badge Black */}
          <div className="bg-black rounded-lg p-2 sm:p-3 mb-2 sm:mb-3 relative">
            <p className="text-white text-xs sm:text-base leading-snug">
              Começar o <span className="text-yellow-400 font-bold">ANO de 2026</span> com
              <br />
              dando entrada na sua <span className="font-bold">CNH</span>
            </p>
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
              <div className="bg-green-500 rounded-full w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center border-2 sm:border-4 border-white rotate-12">
                <Check className="w-4 h-4 sm:w-6 sm:h-6 text-white" strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Red Alert Box */}
          <div className="border-2 border-red-600 rounded-lg p-2 sm:p-3 mb-2 sm:mb-3 bg-red-50">
            <div className="flex items-start gap-2">
              <div className="bg-red-600 rounded p-0.5 sm:p-1 mt-0.5">
                <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" strokeWidth={3} />
              </div>
              <p className="text-black text-xs sm:text-sm flex-1 leading-snug">
                O nosso <span className="font-bold">GUIA NÃO É</span>
                <br />
                em <span className="font-bold">PDF (E-book)</span>
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-center text-black text-xs sm:text-base mb-3 sm:mb-4 leading-relaxed">
            É uma Plataforma com <span className="font-bold">TUDO</span> que
            <br />
            você precisa para tirar sua CNH
            <br />
            <span className="font-bold">Sem Autoescola</span>
          </p>

          {/* Platform Preview Card */}
          <div className="bg-gradient-to-b from-yellow-600 via-yellow-500 to-black rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl">
            <div className="bg-black rounded-lg sm:rounded-xl p-3 sm:p-6">
              {/* Logo Icon */}
              <div className="flex justify-center mb-2 sm:mb-3">
                <div className="bg-yellow-400 rounded-lg sm:rounded-xl p-1.5 sm:p-2 inline-flex">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </div>
              </div>

              <h2 className="text-center text-yellow-400 font-black text-sm sm:text-xl mb-0.5 sm:mb-1">
                CNH SEM AUTOESCOLA
              </h2>
              <p className="text-center text-gray-400 text-xs mb-4 sm:mb-6">Guia Definitivo 2025/2026</p>

              <div className="bg-zinc-900 border border-yellow-400/20 rounded-lg p-3 sm:p-5">
                <h3 className="text-white font-bold text-sm sm:text-base mb-0.5 sm:mb-1">ACESSO AO ALUNO</h3>
                <p className="text-gray-400 text-xs mb-3 sm:mb-4">Digite seus dados para acessar o material.</p>

                {/* Email Field */}
                <div className="mb-2 sm:mb-3">
                  <label className="text-yellow-400 text-xs font-bold mb-1 block">E-MAIL</label>
                  <div className="bg-zinc-800 rounded p-2 flex items-center gap-2 border border-zinc-700">
                    <svg
                      className="w-3 h-3 text-gray-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-500 text-xs">exemplo@email.com</span>
                  </div>
                </div>

                {/* Password Field */}
                <div className="mb-3 sm:mb-4">
                  <label className="text-yellow-400 text-xs font-bold mb-1 block">SENHA</label>
                  <div className="bg-zinc-800 rounded p-2 flex items-center gap-2 border border-zinc-700">
                    <svg
                      className="w-3 h-3 text-gray-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-500 text-xs">••••••••</span>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded text-xs sm:text-sm mb-2 transition-colors">
                  ENTRAR NO SISTEMA
                </button>

                <p className="text-center text-xs">
                  <span className="text-gray-500">Esqueceu sua senha? </span>
                  <span className="text-yellow-400 font-bold">Recuperar acesso</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contador de Vagas */}
      <div className="py-3 sm:py-4 px-3 sm:px-4 bg-gray-50">
        <div className="container mx-auto max-w-2xl">
          <div className="flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full font-bold animate-pulse text-xs sm:text-base">
            <AlertCircle className="w-4 h-4" />
            <span>RESTAM APENAS {vagas} VAGAS</span>
          </div>
        </div>
      </div>

      {/* Módulos Section */}
      <div className="py-6 sm:py-12 px-3 sm:px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-lg sm:text-2xl font-black text-center mb-4 sm:mb-6 text-black">
            O que você vai receber:
          </h2>

          <div className="grid gap-2 sm:gap-3 grid-cols-2 lg:grid-cols-3 mb-6 sm:mb-8">
            {/* Como Zerar os Custos */}
            <Card className="border border-yellow-400 bg-black text-white hover:shadow-lg transition-shadow">
              <CardContent className="p-2.5 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <div className="bg-yellow-400 rounded p-0.5 sm:p-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold">Como Zerar os Custos</h3>
                </div>
                <p className="text-gray-400 text-[10px] sm:text-xs leading-snug">
                  Elimine taxas abusivas e margens de lucro desnecessárias
                </p>
              </CardContent>
            </Card>

            {/* Carro Particular */}
            <Card className="border border-yellow-400 bg-black text-white hover:shadow-lg transition-shadow">
              <CardContent className="p-2.5 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <div className="bg-yellow-400 rounded p-0.5 sm:p-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold">Carro Particular</h3>
                </div>
                <p className="text-gray-400 text-[10px] sm:text-xs leading-snug">
                  A forma correta de usar seu carro nas aulas práticas
                </p>
              </CardContent>
            </Card>

            {/* A Mudança Real */}
            <Card className="border border-yellow-400 bg-black text-white hover:shadow-lg transition-shadow">
              <CardContent className="p-2.5 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <div className="bg-yellow-400 rounded p-0.5 sm:p-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold">A Mudança Real</h3>
                </div>
                <p className="text-gray-400 text-[10px] sm:text-xs leading-snug">
                  O que realmente mudou e vai impactar seu processo
                </p>
              </CardContent>
            </Card>

            {/* Aulas Explicativas */}
            <Card className="border border-yellow-400 bg-black text-white hover:shadow-lg transition-shadow">
              <CardContent className="p-2.5 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <div className="bg-yellow-400 rounded p-0.5 sm:p-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold">Aulas Explicativas</h3>
                </div>
                <p className="text-gray-400 text-[10px] sm:text-xs leading-snug">
                  Vídeos detalhados ensinando cada etapa do processo
                </p>
              </CardContent>
            </Card>

            {/* Documentos Necessários */}
            <Card className="border border-yellow-400 bg-black text-white hover:shadow-lg transition-shadow">
              <CardContent className="p-2.5 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <div className="bg-yellow-400 rounded p-0.5 sm:p-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold">Documentos</h3>
                </div>
                <p className="text-gray-400 text-[10px] sm:text-xs leading-snug">
                  Lista completa dos documentos necessários para usar
                </p>
              </CardContent>
            </Card>

            {/* Compartilhe e Ganhe */}
            <Card className="border border-yellow-400 bg-black text-white hover:shadow-lg transition-shadow">
              <CardContent className="p-2.5 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <div className="bg-yellow-400 rounded p-0.5 sm:p-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold">Ganhe Dinheiro</h3>
                </div>
                <p className="text-gray-400 text-[10px] sm:text-xs leading-snug">
                  Compartilhe o acesso e ganhe comissões por indicação
                </p>
              </CardContent>
            </Card>

            {/* Material Psicotécnico */}
            <Card className="border border-yellow-400 bg-black text-white hover:shadow-lg transition-shadow">
              <CardContent className="p-2.5 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <div className="bg-yellow-400 rounded p-0.5 sm:p-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold">Psicotécnico</h3>
                </div>
                <p className="text-gray-400 text-[10px] sm:text-xs leading-snug">
                  Material completo para passar no exame psicotécnico
                </p>
              </CardContent>
            </Card>

            {/* GPS Burocrático */}
            <Card className="border border-yellow-400 bg-black text-white hover:shadow-lg transition-shadow">
              <CardContent className="p-2.5 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <div className="bg-yellow-400 rounded p-0.5 sm:p-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold">GPS Burocrático</h3>
                </div>
                <p className="text-gray-400 text-[10px] sm:text-xs leading-snug">
                  Navegue no Detran sem travar em filas ou botões errados
                </p>
              </CardContent>
            </Card>

            {/* Mapa da Prova */}
            <Card className="border border-yellow-400 bg-black text-white hover:shadow-lg transition-shadow">
              <CardContent className="p-2.5 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <div className="bg-yellow-400 rounded p-0.5 sm:p-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold">Mapa da Prova</h3>
                </div>
                <p className="text-gray-400 text-[10px] sm:text-xs leading-snug">
                  O que realmente reprova e quando você está pronto para testar
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl sm:rounded-2xl p-6 sm:p-10 text-center shadow-2xl">
            <h3 className="text-lg sm:text-3xl font-black text-black mb-3 sm:mb-4 leading-tight">
              Comece o ANO de 2026 <br className="hidden sm:block" />
              dando entrada na sua CNH
            </h3>
            <p className="text-sm sm:text-lg text-black/80 mb-6 sm:mb-8 font-semibold">
              Conquiste sua liberdade sem depender de carona e sem ser explorado financeiramente
            </p>

            <Link href="/checkout">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-900 text-yellow-400 font-black text-base sm:text-xl px-6 sm:px-10 py-5 sm:py-7 rounded-full shadow-2xl hover:scale-105 transition-all w-full sm:w-auto"
              >
                QUERO MINHA CNH
              </Button>
            </Link>

            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-black/70 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>+1.500 alunos aprovados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
