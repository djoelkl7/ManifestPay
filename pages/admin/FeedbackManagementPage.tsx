
import React, { useState, useEffect } from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import { MessageSquare, Calendar, User, Tag, Trash2, Mail, ExternalLink } from 'lucide-react';

interface Feedback {
    id: number;
    subject: string;
    category: string;
    message: string;
    timestamp: string;
    user: string;
}

const FeedbackManagementPage: React.FC = () => {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

    useEffect(() => {
        // Load feedback from localStorage
        const storedFeedback = JSON.parse(localStorage.getItem('user_feedback') || '[]');
        setFeedbacks(storedFeedback.reverse()); // Newest first
    }, []);

    const deleteFeedback = (id: number) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            const updated = feedbacks.filter(f => f.id !== id);
            setFeedbacks(updated);
            localStorage.setItem('user_feedback', JSON.stringify(updated));
        }
    };

    return (
        <div className="space-y-8">
            <AnimatedSection>
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-white tracking-tight">User Feedback</h1>
                        <p className="text-white/40 text-sm mt-1">Review and manage feedback submitted by ManifestPay users.</p>
                    </div>
                </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 gap-6">
                {feedbacks.length === 0 ? (
                    <AnimatedSection>
                        <div className="bg-primary-gray/50 border border-white/5 rounded-2xl p-12 text-center">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-white/20">
                                <MessageSquare size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-white/60">No feedback received yet</h3>
                            <p className="text-white/30 text-sm max-w-xs mx-auto mt-2">When users submit feedback through their dashboard, it will appear here.</p>
                        </div>
                    </AnimatedSection>
                ) : (
                    feedbacks.map((item, index) => (
                        <AnimatedSection key={item.id} delay={index * 50}>
                            <div className="bg-primary-gray border border-white/5 rounded-2xl p-6 hover:border-electric-blue/30 transition-all group">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                    <div className="space-y-4 flex-grow">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${
                                                item.category === 'Bug' ? 'bg-red-500/20 text-red-400' :
                                                item.category === 'Feature' ? 'bg-soft-cyan/20 text-soft-cyan' :
                                                'bg-electric-blue/20 text-electric-blue'
                                            }`}>
                                                {item.category}
                                            </span>
                                            <h3 className="text-lg font-bold text-white group-hover:text-electric-blue transition-colors">{item.subject}</h3>
                                        </div>
                                        
                                        <p className="text-white/60 leading-relaxed text-sm bg-black/20 p-4 rounded-xl italic">
                                            "{item.message}"
                                        </p>

                                        <div className="flex flex-wrap items-center gap-6 text-[11px] text-white/30 font-mono">
                                            <div className="flex items-center gap-2">
                                                <User size={12} className="text-electric-blue" />
                                                <span>{item.user}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar size={12} className="text-electric-blue" />
                                                <span>{new Date(item.timestamp).toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button 
                                            title="Reply to user"
                                            className="p-2 bg-white/5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all"
                                        >
                                            <Mail size={18} />
                                        </button>
                                        <button 
                                            onClick={() => deleteFeedback(item.id)}
                                            title="Delete feedback"
                                            className="p-2 bg-white/5 rounded-lg text-white/40 hover:text-red-500 hover:bg-red-500/10 transition-all"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))
                )}
            </div>
        </div>
    );
};

export default FeedbackManagementPage;
