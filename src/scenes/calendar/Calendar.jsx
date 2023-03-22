import React from 'react';
import { useState} from 'react';
import { tokens } from '../../theme';
import { Box, Typography, useTheme, List, ListItem, ListItemText } from '@mui/material';
import Header from '../../components/Header';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import locale from '@fullcalendar/core/locales/zh-cn';
import { formatDate } from '@fullcalendar/core';
import listPlugin from "@fullcalendar/list";


const Calendar = () => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleEventClick = (selected) => {
    if (window.confirm(`你确定要删除该事项：${selected.event.title}吗？`)) {
      selected.event.remove();
    }
  };

  const handleDateClick = (selected) => {
    const title = prompt("为你的事项命名");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  return (
    <Box>
      <Header title="日程管理" subTitle="全部日程管理" />
      
      <Box display="flex" justifyContent="space-between">
        {/* sidebar */}
      <Box   flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px">
        <Typography variant="h5">
          事项
        </Typography>
        <List >
            {
              currentEvents.map(event => (
                <ListItem key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0",
                    borderRadius: "2px"
                  }}>
                <ListItemText   primary={event.title}  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })}
                    </Typography>
                  } />

              </ListItem>
              ))}
        </List>
        </Box>
        
    {/* Calendar */}
    <Box flex="1 1 100%" ml="15px">
        <FullCalendar height="75vh" plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]} headerToolbar={{
          left: "prev, next today",
          center: "title",
          right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
          select={handleDateClick}
          eventClick={handleEventClick}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          editable={true}
          initialView="dayGridMonth"
          // 空白点击事件
          dateClick={handleDateClick}
          locale={locale}
          buttonText={{
            today: '今天',
            month: '月',
            week: '周',
            day: '天'
          }}
          allDayText='全天'
          eventsSet={(events)=>setCurrentEvents(events)}
          initialEvents={[
            { title: '会议', start: '2021-12-14', end: "2021-12-17", backgroundColor: "green", id: "1", textColor: 'white' },
            { title:'活动1',start: '2021-12-14', end:"2021-12-15", backgroundColor:"blue", id:"3", textColor:'white', display:'list-item'}
          ]}
        />
      </Box>
    </Box>
    </Box>

   
  )
}

export default Calendar