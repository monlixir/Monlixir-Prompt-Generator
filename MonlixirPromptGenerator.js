
import { useState } from "react";

export default function MonlixirPromptGenerator() {
  const [prompt, setPrompt] = useState("");

  const [form, setForm] = useState({
    archetype: "",
    silhouette: "",
    fabric: "",
    embellishment: "",
    mood: "",
    setting: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generatePrompt = () => {
    const { archetype, silhouette, fabric, embellishment, mood, setting } = form;
    const result = `${archetype ? archetype + " in a " : ""}${fabric} ${silhouette} with ${embellishment}, exuding ${mood}, set in ${setting}.`;
    setPrompt(result);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h2>Monlixir Prompt Generator</h2>
      <div style={{ display: 'grid', gap: '10px' }}>
        <input name="archetype" placeholder="Fashion Archetype" onChange={handleChange} />
        <input name="silhouette" placeholder="Silhouette" onChange={handleChange} />
        <input name="fabric" placeholder="Fabric" onChange={handleChange} />
        <input name="embellishment" placeholder="Embellishment" onChange={handleChange} />
        <input name="mood" placeholder="Mood" onChange={handleChange} />
        <input name="setting" placeholder="Setting" onChange={handleChange} />
        <button onClick={generatePrompt}>Generate Prompt</button>
        <textarea value={prompt} readOnly rows="5" />
      </div>
    </div>
  );
}
