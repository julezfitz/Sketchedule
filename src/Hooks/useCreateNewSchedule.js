import { useNavigate } from 'react-router-dom';
import { db } from '../db';

function useCreateNewSchedule() {
  const navigate = useNavigate();
  const todayDate = new Date(Date.now()).toLocaleDateString('en-ZA');

  async function createNew() {
    try {
      // Add the new schedule
      const id = await db.schedules.add({
        name: `New Schedule - ${todayDate}`,
        dateCreated: new Date(),
      });
      navigate('/edit', { state: { scheduleID: id, scheduleName: `New Schedule - ${todayDate}` } });
    } catch (error) {
      console.log(`Failed to add: ${error}`);
    }
  }

  return { createNew };
}

export default useCreateNewSchedule;
