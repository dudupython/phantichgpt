'use client';
 
// import { useChat } from 'ai/react';
import { useCompletion } from 'ai/react';

export default function Chat() {
  // messages,
  const {stop, completion, input, isLoading, handleInputChange, handleSubmit } = useCompletion(
    {api: '/api/test'}
  );
 
  return (
    <main className="mx-auto w-full max-w-lg p-24 flex flex-col">
      {/* <section className="mb-auto m">
        {messages.map(m => (
          <div className="mb-4" key={m.id}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}
      </section>
      <form className="flex space-x-4" onSubmit={handleSubmit}>
        <input
          className="rounded-md p-2 text-black"
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <button
          className="border-solid border-2 border-white p-2 rounded-md"
          type="submit"
        >
          Send
        </button>
      </form> */}
    
    <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Enter your prompt..."
          onChange={handleInputChange}
        />
        
        <button type="button" onClick={stop}>
          Stop
        </button>
        <button disabled={isLoading} type="submit">
          Submit
        </button>
      </form>
      <p>Completion result: {completion}</p>
    </main>
    
  );
}