import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "Lightbulb",
      title: "Сбор идей и предложений",
      description: "Пользователи оставляют свои предложения в одном месте"
    },
    {
      icon: "ThumbsUp",
      title: "Голосование за идеи",
      description: "Позволяет понять, что действительно важно для пользователей"
    },
    {
      icon: "MessageSquare",
      title: "Обсуждения и комментарии",
      description: "Глубина обратной связи и улучшение идей"
    },
    {
      icon: "ListOrdered",
      title: "Приоритизация задач",
      description: "Формируйте бэклог на основе голосов и активности"
    },
    {
      icon: "Zap",
      title: "Быстрая регистрация",
      description: "Начните работать с командой сразу"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Rocket" size={20} className="text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Involveo</span>
          </div>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
            onClick={() => window.open('https://involveo.ru', '_blank')}
          >
            Перейти на основной сайт
          </Button>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                SaaS для развития продуктов
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Собирайте идеи, обсуждайте их с командой, управляйте приоритетами
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Управляйте развитием продукта вместе с пользователями
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Involveo помогает собирать идеи, комментировать их и голосовать за лучшие. 
              Это позволяет вашей команде точно понимать, какие задачи наиболее важны для пользователей, 
              и приоритизировать их в бэклоге.
            </p>

            <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <img 
                src="https://cdn.poehali.dev/projects/95b26132-8d1f-4076-994e-846c919d430e/files/b245bcf3-db29-4787-a16a-db350f97cb6f.jpg" 
                alt="Involveo интерфейс" 
                className="w-full h-auto"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                onClick={() => window.open('https://involveo.ru', '_blank')}
              >
                <Icon name="ExternalLink" size={20} className="mr-2" />
                Перейти на основной сайт
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="font-semibold text-lg px-8 py-6 border-2 hover:bg-accent transition-all hover:scale-105"
                onClick={() => window.open('https://involveo.ru/registration', '_blank')}
              >
                <Icon name="UserPlus" size={20} className="mr-2" />
                Попробовать зарегистрироваться
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Почему команды выбирают Involveo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Всё необходимое для эффективной работы с обратной связью от пользователей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary/50 bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              onClick={() => window.open('https://involveo.ru/registration', '_blank')}
            >
              <Icon name="Sparkles" size={20} className="mr-2" />
              Начать на основном сайте
            </Button>
          </div>
        </section>

        <section className="bg-muted/50 border-t">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Rocket" size={24} className="text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold text-foreground">Involveo</span>
              </div>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                SaaS-сервис для улучшения продуктов через активное участие пользователей
              </p>

              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  © 2024 Involveo. Все права защищены.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;