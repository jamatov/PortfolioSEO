import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faq() {
  return (
    <section className='Faq'>
      <div className="container">
        <h2>03 <span>Часто задаваемые вопросы</span></h2>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='accardion-tittle'>Сколько стоит запустить контекстную рекламу?</Typography>
          </AccordionSummary>
          <AccordionDetails className='ac-de'>
            <Typography className='accardion-info'>
            Моя услуга стоит 1 млн сум на месяц, стоимость рекламы делится по вашим конкурентам.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='accardion-tittle'>Хочу первую позицию в Google рекламе. Сколько это стоит?</Typography>
          </AccordionSummary>
          <AccordionDetails className='ac-de'>
            <Typography className='accardion-info'>
            Реклама в поисковых система происходит по система аукциона. Кто платит больше, тот стоит выше. И цены формируются рынком. По Узбекистану средние цены на рекламу в день 5-10$
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='accardion-tittle'>Что нужно для создания сайта?</Typography>
          </AccordionSummary>
          <AccordionDetails className='ac-de'>
            <Typography className='accardion-info'>
            Для начала работ по созданию сайта желательно предоставить: <br />
            — Логотип (если есть); <br />
            — Фирменный стиль. Если фирменного стиля нет, то необходимо высказать свои пожелания к цветовой схеме будущего сайта; <br />
            — Контент для сайта (изображения, тексты, фотографии, видео и т.п.);<br />
            — Ваше представление структуры сайта, разделы и их название, что они будут включать, функциональные возможности;<br />
            — Любые ваши пожелания, фантазии, требования к будущему сайту
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='accardion-tittle'>Сколько времени занимает создание сайта?</Typography>
          </AccordionSummary>
          <AccordionDetails className='ac-de'>
            <Typography className='accardion-info'>
              Это наверное один из самых часто задаваемых вопросов. Количество времени потраченного на разработку сайта зависит от нескольких факторов: вид сайта, сложность дизайна, функционал сайта, структура сайта, количество страниц. В среднем на разработку Landing page уходит от 2 до 5 дней, сайта-визитки — от 5 до 10 дней, Интернет-магазин — от 10 до 20 дней, сайт портфолио или личный блог — от 5 дней. Конечно же эти цифры приблизительные
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='accardion-tittle'>Смогу ли я в дальнейшем редактировать сайт самостоятельно?</Typography>
          </AccordionSummary>
          <AccordionDetails className='ac-de'>
            <Typography className='accardion-info'>
            Да, конечно, Вам будет предоставлена инструкция и доступ к системе управления сайтом, у которой очень доступный интерфейс, понятный на интуитивном уровне и не требующий специфических знаний
            </Typography>
          </AccordionDetails>
        </Accordion>

        

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='accardion-tittle'>Сколько стоит создание сайта?</Typography>
          </AccordionSummary>
          <AccordionDetails className='ac-de'>
            <Typography className='accardion-info'>
            Цена сайта рассчитывается в зависимости от размера сайта. Стартовая цена от $400
            </Typography>
          </AccordionDetails>
        </Accordion>

        
        
       
      </div>
    </section>
  )
}
