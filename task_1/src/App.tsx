import FirstScreen from './components/FirstScreen';
import Numbers from './components/Numbers';
import Project from './components/Project';
import Request from './components/Request';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <FirstScreen />
      <main>
        <Numbers />
        <Project />
        <Request />
      </main>
      <Footer />
    </div>
  );
}
