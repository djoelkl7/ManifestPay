import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, CheckCircle2, X } from 'lucide-react';

interface FeedbackFormProps {
  onClose?: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    subject: '',
    category: 'General',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Save to local storage for "admin" to see (simulation)
      const feedback = JSON.parse(localStorage.getItem('user_feedback') || '[]');
      feedback.push({
        ...formData,
        id: Date.now(),
        timestamp: new Date().toISOString(),
        user: 'Current User' // In a real app, this would be the actual user ID/name
      });
      localStorage.setItem('user_feedback', JSON.stringify(feedback));
    }, 1500);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-primary-gray p-8 rounded-2xl border border-soft-cyan/30 text-center space-y-4"
      >
        <div className="w-16 h-16 bg-soft-cyan/20 rounded-full flex items-center justify-center mx-auto text-soft-cyan">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-xl font-bold text-white">Feedback Received</h3>
        <p className="text-white/60">Thank you for helping us improve ManifestPay. Our team will review your message shortly.</p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setFormData({ subject: '', category: 'General', message: '' });
            if (onClose) onClose();
          }}
          className="btn-primary w-full"
        >
          Close
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-primary-gray p-6 rounded-2xl border border-white/5 shadow-2xl relative">
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      )}
      
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-electric-blue/20 rounded-lg text-electric-blue">
          <MessageSquare size={20} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Share Your Feedback</h3>
          <p className="text-white/40 text-xs uppercase tracking-widest mt-0.5">Help us evolve</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-1.5 ml-1">Subject</label>
          <input
            type="text"
            required
            placeholder="What's this about?"
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue/50 transition-colors"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-1.5 ml-1">Category</label>
          <select
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue/50 transition-colors appearance-none"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="General">General Feedback</option>
            <option value="Bug">Report a Bug</option>
            <option value="Feature">Feature Request</option>
            <option value="Account">Account Security</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-1.5 ml-1">Your Message</label>
          <textarea
            required
            rows={4}
            placeholder="Tell us more details..."
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue/50 transition-colors resize-none"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <>
              <span>Submit Feedback</span>
              <Send size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
