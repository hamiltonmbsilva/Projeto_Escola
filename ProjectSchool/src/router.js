import Vue from 'vue';
import Router from 'vue-router';

import Alunos from './components/Aluno/Alunos'
import Professor from './components/Professor/Professor'
import Sobre from './components/Sobre/Sobre'
import AlunoDetalhe from './components/Aluno/AlunoDetalhe'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/professores',
            name: 'Professores',
            component: Professor
        },

        {
            path: '/alunos/:prof_id',
            name: 'Alunos',
            component: Alunos
        },
        {
            path: '/todosalunos',
            name: 'Alunos',
            component: Alunos
        },
        {
            path: '/alunoDetalhe/:id',
            name: 'AlunoDetalhe',
            component: AlunoDetalhe
        },

        {
            path: '/sobre',
            name: 'Sobre',
            component: Sobre
        }
    ]
})