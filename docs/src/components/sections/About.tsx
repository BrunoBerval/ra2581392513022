import { useMemo } from 'react';
import { userData } from '../../data/user';
import { calculateCurrentSemester } from '../utils/dateHelper';
import { SectionTitle } from '../ui/SectionTitle';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

export function About() {
  // Calculamos o semestre apenas uma vez ao carregar a página
  const currentSemester = useMemo(() => {
    return calculateCurrentSemester(userData.education.startDate);
  }, []);

  // URLs dos ícones (Helper interno para limpar o JSX)
  const icons = {
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
  };

  // Classe para os ícones inline: 
  // w-5 h-5: Tamanho pequeno
  // inline-block: Para fluir com o texto
  // grayscale: Tira a cor
  // opacity-70: Deixa no tom cinza suave do texto
  // mb-1: Ajuste fino de alinhamento vertical
  const iconClass = "w-5 h-5 inline-block mr-1 grayscale opacity-70 mb-1";

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Sobre Mim" 
          subtitle="Minha jornada técnica e acadêmica na área de desenvolvimento de software."
        />

        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* Coluna Biografia (Ocupa 7 colunas) */}
<div className="md:col-span-7 space-y-6 text-slate-600 leading-relaxed text-lg">
  <p>
    Sou um desenvolvedor em constante evolução, sempre buscando aprender e aprimorar minhas habilidades.
    Durante minha jornada, tenho me dedicado a entender melhor boas práticas de engenharia de software
    e explorar ferramentas modernas que me ajudem a construir soluções mais sólidas e eficientes.
  </p>
  
  {/* Parágrafo com os Ícones Inline */}
  <p>
    Tenho adquirido experiência prática com{' '}
    <span className="font-semibold text-slate-700 whitespace-nowrap">
      <img src={icons.python} alt="Python" className={iconClass} />
      Python
    </span>,{' '}
    <span className="font-semibold text-slate-700 whitespace-nowrap">
      <img src={icons.typescript} alt="TS" className={iconClass} />
      TypeScript
    </span>{' '}
    e{' '}
    <span className="font-semibold text-slate-700 whitespace-nowrap">
      <img src={icons.go} alt="Go" className={iconClass} />
      Go
    </span>, 
    trabalhando no desenvolvimento de aplicações fullstack, tanto na criação de APIs RESTful
    quanto na construção de interfaces mais dinâmicas e agradáveis de usar.
  </p>

  <p>
    No momento, estou voltado ao estudo de <strong>Ciência de Dados e Machine Learning</strong>,
    buscando compreender melhor como modelos como YOLO e ResNet podem ajudar em problemas práticos
    de visão computacional. Tento sempre manter uma abordagem guiada por dados e focada em aprender
    um pouco mais a cada projeto.
  </p>
</div>


          {/* Coluna Cards de Informação (Ocupa 5 colunas) */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Card de Educação */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-700">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Formação Acadêmica</h3>
                  <p className="text-slate-600 font-medium">{userData.education.institution}</p>
                  <p className="text-sm text-slate-500 mt-1">{userData.education.course}</p>
                  
                  {/* Badge Dinâmico do Semestre */}
                  <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                    <BookOpen size={16} className="text-blue-700" />
                    <span className="text-sm font-semibold text-blue-800">
                      Cursando {currentSemester}º Semestre
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Localização e Status */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700">
                  <MapPin size={20} className="text-slate-400" />
                  <span>{userData.location}</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <Calendar size={20} className="text-slate-400" />
                  <span>Inglês Avançado</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}