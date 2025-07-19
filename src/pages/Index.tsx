import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Star, Users, Award } from "lucide-react";

const Index = () => {
  const handleCTAClick = () => {
    window.open("https://pay.hotmart.com/B100385069F?checkoutMode=10&split=12", "_blank");
  };

  const testimonials = [
    {
      name: "Fabrí",
      text: "Eu amei demais, muito bem explicado! Consegui fazer os brigadeiros. Antes eu não conseguia acertar o ponto, sempre ficava mole... Mas agora eu consigo fazer tranquilamente.",
      verified: true
    },
    {
      name: "Aluna",
      text: "Sim, demais! É muito bem explicado. Além de ter o ponto em forma visual, a explicação é maravilhosa.",
      verified: true
    },
    {
      name: "Isis Amanda de Souza",
      text: "Passando para agradecer, fiz o brigadeiro de pistache em forma de recheio. Ficou perfeito ❤",
      verified: true
    },
    {
      name: "Eliana Cristina de Souza Fonseca",
      text: "Maravilhoso. Se eu tivesse feito o curso de brigadeiro antes, eu já teria muitos clientes.",
      verified: true
    }
  ];

  const benefits = [
    "Como acertar o ponto do brigadeiro com os olhos e as mãos",
    "Método passo a passo, com vídeos diretos e fáceis de aplicar",
    "Como transformar seu brigadeiro em um doce profissional",
    "Técnicas que funcionam para recheios e enrolados",
    "Funciona mesmo começando do zero"
  ];

  const courseIncludes = [
    "Módulos em Vídeo - Aulas práticas e diretas",
    "Método Visual Infalível - Reconheça o ponto perfeito",
    "Receitas Testadas e Aprovadas",
    "PDF de Apoio - Material complementar",
    "Acesso por 1 Ano - Assista quantas vezes quiser"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-accent opacity-50"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex justify-center lg:justify-start mb-3">
                <img 
                  src="/lovable-uploads/8ba8efbb-9814-4b26-864d-b22e31a9b295.png" 
                  alt="Bawale Academy Logo"
                  className="h-12 object-contain"
                />
              </div>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-2">
                🎯 Método Exclusivo
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                Nunca mais erre o <span className="text-primary">ponto do brigadeiro</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Aprenda o método visual que transforma leite condensado em lucro – mesmo que você esteja começando do zero!
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm sm:text-base">Sem frustração</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm sm:text-base">Sem desperdício</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm sm:text-base">Resultados garantidos</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/667d20a9-3f56-48b9-9d25-33650b99dd89.png" 
                alt="Confeiteiros profissionais preparando brigadeiros"
                className="rounded-2xl shadow-card w-full"
              />
              <div className="absolute -bottom-12 -left-6 bg-card p-4 rounded-xl shadow-card border border-border">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold">500+ Alunas</p>
                    <p className="text-sm text-muted-foreground">Já dominaram a técnica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            O Problema que Está <span className="text-destructive">Travando</span> Seus Resultados
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-muted border-destructive/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">😞</span>
                </div>
                <h3 className="font-semibold mb-2 text-destructive">Frustração Constante</h3>
                <p className="text-sm text-muted-foreground">
                  Brigadeiro mole demais ou duro feito pedra. Ingredientes no lixo e horas perdidas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted border-destructive/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💸</span>
                </div>
                <h3 className="font-semibold mb-2 text-destructive">Desperdício de Dinheiro</h3>
                <p className="text-sm text-muted-foreground">
                  Cada receita errada é dinheiro jogado fora. Sem falar na vergonha do resultado.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted border-destructive/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">😔</span>
                </div>
                <h3 className="font-semibold mb-2 text-destructive">Baixa Autoestima</h3>
                <p className="text-sm text-muted-foreground">
                  "Por que eu não consigo?", "Será que não é pra mim?". Você já pensou isso?
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-8 mt-12">
            <p className="text-lg leading-relaxed">
              <strong className="text-destructive">A verdade é:</strong> Se você continuar sem entender o ponto do brigadeiro, 
              nada muda. Vai continuar desperdiçando material, se sentindo insegura e vendo outras pessoas 
              ganhando dinheiro enquanto você trava. <strong>A hora de virar esse jogo é agora.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-success/20 text-success border-success/30">
              ✨ A Solução Definitiva
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              O Método que Faz Você <span className="text-primary">Acertar o Ponto</span> Sem Frustração
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O método visual, simples e direto que já ajudou centenas de mulheres a acertarem 
              o ponto do brigadeiro sem adivinhação, sem desperdício e sem precisar ter experiência.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/lovable-uploads/d19a778f-fcee-44c8-94c7-8dcd95512899.png" 
                alt="Técnica de mexer o brigadeiro"
                className="rounded-2xl shadow-card w-full"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">🍫 O Segredo do Ponto Perfeito</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img 
              src="/lovable-uploads/39b358ac-0124-4500-8b55-f739a06e2911.png" 
              alt="Confeiteira usando técnica visual para preparar brigadeiro"
              className="rounded-xl shadow-card w-full h-48 object-cover"
            />
            <img 
              src="/lovable-uploads/70c99746-a49f-43d2-b06f-a275afc19f10.png" 
              alt="Variedade de brigadeiros gourmet"
              className="rounded-xl shadow-card w-full h-48 object-cover"
            />
            <img 
              src="/lovable-uploads/48ac293c-8583-4553-b31c-20a622d2afe5.png" 
              alt="Brigadeiros premium finalizados"
              className="rounded-xl shadow-card w-full h-48 object-cover md:col-span-2 lg:col-span-1"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              💬 Provas Reais
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Transformações Reais de <span className="text-primary">Alunas</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Nada é mais convincente do que ver quem já aplicou o método e teve resultado
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <img 
              src="/lovable-uploads/608d0d33-e76a-4dc2-9ab0-8c9b86ac1dce.png" 
              alt="Depoimento de aluna no WhatsApp"
              className="rounded-xl shadow-card w-full"
            />
            <img 
              src="/lovable-uploads/90656d47-dcc8-4ca5-a58c-2bf6e459d0ea.png" 
              alt="Depoimentos no Facebook"
              className="rounded-xl shadow-card w-full"
            />
          </div>

        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              📚 Conteúdo Completo
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              O Que Você Vai <span className="text-primary">Receber</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Um pacote completo de transformação com tudo que precisa para fazer brigadeiros de vitrine
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {courseIncludes.map((item, index) => (
                <Card key={index} className="bg-muted border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.split(' - ')[0]}</h4>
                        {item.split(' - ')[1] && (
                          <p className="text-sm text-muted-foreground">{item.split(' - ')[1]}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div>
              <img 
                src="/lovable-uploads/3520523e-d9be-4c09-9992-f5ed44948052.png" 
                alt="Confeiteira ensinando técnica visual"
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-success/10 border border-success/20 rounded-2xl p-8 space-y-6">
            <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-10 h-10 text-success" />
            </div>
            <h2 className="text-3xl font-bold">Garantia Incondicional</h2>
            <p className="text-xl text-muted-foreground">
              Teste o curso por 7 dias. Se não funcionar para você, devolvemos 100% do seu dinheiro.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Clock className="w-8 h-8 text-success mx-auto mb-2" />
                <h4 className="font-semibold">7 Dias</h4>
                <p className="text-sm text-muted-foreground">Para testar</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
                <h4 className="font-semibold">Sem Perguntas</h4>
                <p className="text-sm text-muted-foreground">Processo simples</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-success mx-auto mb-2" />
                <h4 className="font-semibold">100% Seguro</h4>
                <p className="text-sm text-muted-foreground">Risco zero</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="bg-destructive/20 text-destructive border-destructive/30">
            🔥 Oferta Limitada
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">
            De <span className="line-through text-muted-foreground">R$147</span> por apenas
          </h2>
          
          <Card className="bg-gradient-accent border-primary/30 max-w-md mx-auto">
            <CardContent className="p-8 text-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold">Curso Completo</h3>
                <p className="text-muted-foreground">Acesso por 1 ano</p>
              </div>
              
              <div className="space-y-3">
                <div className="text-5xl font-bold text-primary">12x R$12,93</div>
                <p className="text-lg font-semibold">ou R$96 à vista</p>
                <p className="text-sm text-muted-foreground">no cartão de crédito</p>
              </div>

              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Método visual infalível</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Receitas profissionais</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Suporte por 1 ano</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Garantia de 7 dias</span>
                </li>
              </ul>

              <Button 
                onClick={handleCTAClick}
                variant="cta" 
                size="xl"
                className="w-full animate-pulse"
              >
                🍫 GARANTIR MINHA VAGA POR R$97
              </Button>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground">
            ⏰ Oferta válida por tempo limitado
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center space-y-8 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold">
            A Escolha Está em Suas Mãos
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Você pode continuar tentando acertar o ponto sozinha, errando e se frustrando...
            <br />
            <strong>OU</strong> pode tomar uma decisão diferente hoje.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">🍬</div>
              <h4 className="font-semibold mb-2">Orgulho dos Doces</h4>
              <p className="text-sm opacity-80">Brigadeiros de vitrine que encantam</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">👏</div>
              <h4 className="font-semibold mb-2">Elogios Sinceros</h4>
              <p className="text-sm opacity-80">Reconhecimento pela qualidade</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">💰</div>
              <h4 className="font-semibold mb-2">Renda Extra</h4>
              <p className="text-sm opacity-80">Transforme habilidade em dinheiro</p>
            </div>
          </div>

          <Button 
            onClick={handleCTAClick}
            variant="outline" 
            size="xl"
            className="bg-white text-primary hover:bg-white/90 border-white text-lg sm:text-xl font-bold py-6 px-8 sm:py-8 sm:px-12 shadow-2xl w-full sm:w-auto"
          >
            🚀 FAZER MINHA ESCOLHA AGORA
          </Button>
        </div>
      </section>

      {/* Testimonials Final Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              💬 Depoimentos Reais
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              O Que Nossas <span className="text-primary">Alunas Dizem</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-muted border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Star className="w-6 h-6 text-primary fill-current" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <Badge variant="secondary" className="text-xs">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verificado
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={handleCTAClick}
              variant="cta" 
              size="xl"
              className="animate-pulse text-lg sm:text-xl font-bold py-6 px-8 sm:py-8 sm:px-12 w-full sm:w-auto"
            >
              🚀 LIBERAR ACESSO IMEDIATO
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-muted border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Bawale Escola de Confeitaria. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
