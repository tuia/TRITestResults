var indexQuestions = function() {
  $.each($('.question-alternative .control-label'), function(index, alternative) {
    $(alternative).html('Alternativa ' + (index + 1));
  });
}


$(document).ready(function () {

    //Index Questions in new evaluation
    $('.new-evaluation-question-container .panel').each(function() {
      $(this).find('h2').append("<span>" + ($(this).index() +1) + "</span>");
    });

    //Toggle active class on item-list
      $('.item-list .item input[type="checkbox"').change( function() {
        if ( $(this).is(':checked') ){
          $(this).parents('.item').addClass('active');
        } else {
          $(this).parents('.item').removeClass('active');
        }
      });
      
    //Mostra conteúdo escondido
    $('.show-more-btn').click( function() {
      $(this).parents('.show-more-container').find('.hidden-content').slideToggle();
      $(this).parents('.show-more-container').find('.text-preview').toggle();
      return false
    });

    //Ordena alternativas
    indexQuestions();

    //Tooltip
    $('.hastooltip').tooltip({container:'body'});

    //Selectpicker
    if ($(".selectpicker")[0]){
      $('.selectpicker').selectpicker();
    }

    // BUTTON TABS
    $('[data-toggle="btns"] .btn').on('click', function(){
      var $this = $(this);
        $this.parent().find('.active').removeClass('active');
        $this.addClass('active');
    });

    // SUMMERNOTE
    if ($(".summernote")[0]){
        $('.summernote').summernote({
          height: 100,                 // set editor height
          minHeight: 100,             // set minimum height of editor
          maxHeight: null,             // set maximum height of editor
          focus: true,               // set focus to editable area after initializing summernote
          lang: 'pt-BR'
        });
    }

    //AFFIX
    if ($("#new-question-header")[0]){
      var maxY = $('#new-question-header .panel').offset().top;

      $('#new-question-header').affix({
        offset: {
          bottom: 0,
          top: function () {
            return (this.bottom = maxY)
          }
        }
      });
    }

    //COMPETENCIAS E HABILIDADES

    //ADICIONA SECAO
    $('.sections-container').on('click', '.add-section-btn', function(){
        var container = $(this).parents('.sections-container'),
            secao = container.find('.section-item').html(),
            conteudo = '<div class="section-item">'+secao+'</div>',
            qtdade = container.find('.section-item').length;
            
        if ( qtdade < 4 ) {
            $(this).parents('.sections-container').find('.sections-list').append(conteudo);
        } else {
            container.find('.alert').remove();
            container.find('.sections-list').prepend('<div class="alert alert-warning alert-dismissible">Só é possível adicionar até 4 itens. <button type="button" class="close" data-dismiss="alert" aria-label="fechar"><i class="fa fa-remove"></i></div>')
        }

        indexQuestions();

        return false
    });

    //REMOVE SECAO
    $('.sections-container').on('click', '.remove-section-btn', function(){
        $(this).parents('.section-item').remove();
        return false
    });


    // Start the tour
    $('.review-button').click( function() {

      // REVISÃO
      // Instance the tour
      var tour = new Tour({
        storage: false,
        onStart: function() {
          console.log('inicio');
          $('#question-panels').removeClass('col-xs-12').addClass('col-xs-9');
        },
        onEnd: function() {
          console.log('inicio');
          $('#question-panels').removeClass('col-xs-9').addClass('col-xs-12');
        },
        template: "<div class='popover tour'><a href='#' data-role='end'><i class='fa fa-times'></i></a><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><div class='pull-right'><a href='#ver-checklist-modal' class='btn btn-link btn-sm' data-toggle='modal'>ver checklist</a><button class='btn btn-default btn-sm' data-role='prev'>« voltar</button> <button class='btn btn-info btn-sm' data-role='next'>sim »</button></div><span class='clearfix'></span></div>",
        steps: [
        {
          element: ".ennunciation-review-item",
          title: "Revisão",
          content: "Quanto à situação-problema, além de ser atraente para o participante, o texto <strong>está correto (conteúdo)</strong>?"
        },
        {
          element: ".ennunciation-review-item",
          title: "Revisão",
          content: "Quanto à situação-problema, o texto <strong>envolve interdisciplinaridade e contextualização</strong>?"
        },
        {
          element: ".ennunciation-review-item",
          title: "Revisão",
          content: "Quanto à situação-problema, o texto <strong>é adequado à extensão da prova</strong>?"
        },
        {
          element: ".ennunciation-review-item",
          title: "Revisão",
          content: "Quanto ao enunciado da questão, <strong>apresenta claramente um único problema proposto para o participante</strong>?"
        },
        {
          element: ".ennunciation-review-item",
          title: "Revisão",
          content: "Quanto ao enunciado da questão, <strong>contém as informações essenciais para a solução do problema proposto, evitando elementos supérfluos</strong>?"
        },
        {
          element: ".ennunciation-review-item",
          title: "Revisão",
          content: "Quanto ao enunciado da questão, <strong>é adequado em relação à dificuldade pretendida</strong>?"
        },
        {
          element: ".ennunciation-review-item",
          title: "Revisão",
          content: "Quanto ao enunciado da questão, <strong>é adequado em relação ao tempo disponível para a prova</strong>?"
        },
        {
          element: ".ennunciation-review-item",
          title: "Revisão",
          content: "Quanto ao enunciado da questão, <strong>é adequado em relação à quantidade de tarefas a serem executadas para a escolha da alternativa</strong>?"
        },
        {
          element: ".ennunciation-review-item",
          title: "Revisão",
          content: "Quanto ao enunciado da questão, <strong>está livre de afirmações preconceituosas</strong>?"
        },
        {
          element: ".ennunciation-review-item",
          title: "Revisão",
          content: "Quanto ao enunciado da questão, <strong>há possibilidade de incluir no enunciado os elementos que se repetem nas alternativas, visando diminuir o tamanho da questão e tornar mais evidente o elemento variante que aparece nas alternativas</strong>?"
        },
        {
          element: ".question-review-item",
          title: "Revisão",
          content: "Quanto às alternativas, <strong>a alternativa correta é indiscutivelmente a única</strong>?"
        },
        {
          element: ".question-review-item",
          title: "Revisão",
          content: "Quanto às alternativas, <strong>as alternativas incorretas (distratores) representam relações possíveis de serem estabelecidas pelo participante mas não são condições suficientes para a resolução dos problemas</strong>?"
        },
        {
          element: ".question-review-item",
          title: "Revisão",
          content: "Quanto às alternativas, <strong>são adequadas em relação ao tempo disponível para a prova</strong>?"
        },
        {
          element: ".question-review-item",
          title: "Revisão",
          content: "Quanto às alternativas, <strong>estão colocadas em ordem lógica, crescente ou decrescente, sempre que envolverem valores numéricos</strong>?"
        },
        {
          element: ".question-review-item",
          title: "Revisão",
          content: "Quanto às alternativas, <strong>são homogêneas no conteúdo, integrando uma mesma família de fatos e ideias</strong>?"
        },
        {
          element: ".question-review-item",
          title: "Revisão",
          content: "Quanto às alternativas, <strong>são homogêneas na forma</strong>?"
        },
        {
          element: ".question-review-item",
          title: "Revisão",
          content: "Quanto às alternativas, <strong>são independentes, sem subtendidos ou referências às alternativas anteriores</strong>?"
        },
        {
          element: ".question-review-item",
          title: "Revisão",
          content: "Quanto às alternativas, <strong>estão livres de “pistas” que possam ajudar o participante na resolução da questão</strong>?"
        },
        {
          element: ".question-review-item",
          title: "Revisão",
          content: "Quanto às alternativas, <strong>estão livres de elementos ( pegadinhas ) que possam induzir o participante a erros</strong>?"
        },
        {
          element: ".question-review-item",
          title: "Revisão",
          content: "Quanto às alternativas, <strong>não constituem um conjunto de afirmações “falso-verdadeiras” independentes</strong>?"
        },
        {
          element: ".question-review-item",
          title: "Revisão",
          content: "Quanto às alternativas, <strong>está livre de certas palavras que induzem à afirmações falsas ou verdadeiras. Frases onde aparecem “sempre” ou “nunca”, “tudo” ou “todo”, “só” ou “somente” são em sua grande maioria falsas. As que contém “alguns” ou “geralmente” são quase sempre verdadeiras</strong>?"
        },
        {
          element: ".question-review-item",
          title: "Revisão",
          content: "Quanto às alternativas, <strong>a alternativa correta não pode ser decidida pelo participante, sem que ele necessite estabelecer qualquer relação com o enunciado ou texto. O mesmo critério vale para os distratores</strong>?"
        }
      ]});
      
      // Initialize the tour
        tour.init();
        tour.start();
    });

});