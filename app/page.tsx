"use client";

import React, { useState } from 'react';
import { Github, FileText, Zap, User, LogIn, Plus, Search, Settings, BookOpen, Bot, Sparkles, Upload, Clock, CheckCircle } from 'lucide-react';

// Types
interface GeneratedDoc {
  id: number;
  repoName: string;
  repoUrl: string;
  createdAt: string;
  status: string;
}

type AuthMode = 'login' | 'signup';

const GitHubDocGenerator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  const [repoUrl, setRepoUrl] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedDocs, setGeneratedDocs] = useState<GeneratedDoc[]>([]);

  const handleAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowAuthModal(false);
  };

  const handleGenerateDoc = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!repoUrl) return;

    setIsGenerating(true);
    setTimeout(() => {
      const newDoc: GeneratedDoc = {
        id: Date.now(),
        repoName: repoUrl.split('/').pop() || 'Unknown',
        repoUrl,
        createdAt: new Date().toLocaleDateString('fr-FR'),
        status: 'Terminé'
      };
      setGeneratedDocs([newDoc, ...generatedDocs]);
      setRepoUrl('');
      setIsGenerating(false);
    }, 3000);
  };

  const AuthModal = () => (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 w-full max-w-md shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-white">
              {authMode === 'login' ? 'Se connecter' : "S'inscrire"}
            </h2>
            <button
                onClick={() => setShowAuthModal(false)}
                className="text-zinc-400 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleAuth} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Email
              </label>
              <input
                  type="email"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ton@email.com"
                  required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Mot de passe
              </label>
              <input
                  type="password"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
              />
            </div>

            {authMode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Confirmer le mot de passe
                  </label>
                  <input
                      type="password"
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                  />
                </div>
            )}

            <button
                type="submit"
                className="w-full bg-white text-black py-3 px-4 rounded-lg font-medium hover:bg-zinc-100 transition-colors"
            >
              {authMode === 'login' ? 'Se connecter' : "S'inscrire"}
            </button>

            <div className="text-center">
              <button
                  type="button"
                  onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
              >
                {authMode === 'login'
                    ? "Pas de compte ? S'inscrire"
                    : "Déjà un compte ? Se connecter"
                }
              </button>
            </div>
          </form>
        </div>
      </div>
  );

  if (!isLoggedIn) {
    return (
        <div className="min-h-screen bg-black text-white">
          {/* Header V0 style */}
          <header className="border-b border-zinc-800 bg-black/50 backdrop-blur-xl sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xl font-semibold">DocuMate</span>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                      onClick={() => {
                        setAuthMode('login');
                        setShowAuthModal(true);
                      }}
                      className="text-zinc-400 hover:text-white transition-colors px-4 py-2"
                  >
                    Se connecter
                  </button>

                  <button
                      onClick={() => {
                        setAuthMode('signup');
                        setShowAuthModal(true);
                      }}
                      className="bg-white text-black px-4 py-2 rounded-lg hover:bg-zinc-100 transition-colors font-medium"
                  >
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Hero V0 style */}
          <main className="relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>

            <div className="relative max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-20">
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-full text-sm text-zinc-300 mb-8">
                  <Sparkles className="w-4 h-4" />
                  <span>Alimenté par GPT-4 & Claude</span>
                </div>

                <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
                  Documentation<br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  automatique
                </span>
                </h1>

                <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Transformez n'importe quel repository GitHub en documentation
                  professionnelle avec l'IA. Simple, rapide, efficace.
                </p>

                <div className="flex justify-center space-x-4 mb-16">
                  <button
                      onClick={() => {
                        setAuthMode('signup');
                        setShowAuthModal(true);
                      }}
                      className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-zinc-100 transition-all transform hover:scale-105 flex items-center space-x-2"
                  >
                    <Zap className="w-5 h-5" />
                    <span>Commencer gratuitement</span>
                  </button>

                  <button className="border border-zinc-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-zinc-900 transition-colors">
                    Voir un exemple
                  </button>
                </div>
              </div>

              {/* Preview card V0 style */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-1 shadow-2xl mb-20">
                <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-xl p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <Github className="w-6 h-6 text-zinc-400" />
                    <div className="flex-1 bg-zinc-800 rounded-lg px-4 py-3 text-zinc-500">
                      https://github.com/vercel/next.js
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      Générer
                    </button>
                  </div>
                  <div className="text-sm text-zinc-400">
                    L'IA analyse votre code et génère une documentation complète automatiquement
                  </div>
                </div>
              </div>

              {/* Features grid V0 style */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-8 hover:bg-zinc-950 transition-colors">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Github className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Connexion directe</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Connectez votre repository GitHub en un clic. Notre IA analyse automatiquement votre code source.
                  </p>
                </div>

                <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-8 hover:bg-zinc-950 transition-colors">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Bot className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">IA avancée</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Utilise les derniers modèles GPT-4 et Claude pour comprendre et documenter votre projet.
                  </p>
                </div>

                <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-8 hover:bg-zinc-950 transition-colors">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                    <FileText className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Documentation pro</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Génère README, guides d'installation, API docs et plus encore, prêts à publier.
                  </p>
                </div>
              </div>
            </div>
          </main>

          {showAuthModal && <AuthModal />}
        </div>
    );
  }

  return (
      <div className="min-h-screen bg-black text-white">
        {/* Header logged in V0 style */}
        <header className="border-b border-zinc-800 bg-black/50 backdrop-blur-xl sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xl font-semibold">DocuMate</span>
                </div>

                <nav className="hidden md:flex items-center space-x-6">
                  <a href="#" className="text-white">Dashboard</a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">Projets</a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">Templates</a>
                </nav>
              </div>

              <div className="flex items-center space-x-4">
                <button className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors">
                  <Settings className="w-5 h-5" />
                </button>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium hidden sm:block">Utilisateur</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          {/* Main generator card V0 style */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Générer une documentation</h2>
              <p className="text-zinc-400">Collez l'URL de votre repository GitHub pour commencer</p>
            </div>

            <form onSubmit={handleGenerateDoc} className="max-w-2xl mx-auto">
              <div className="flex space-x-4">
                <div className="flex-1 relative">
                  <Github className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  <input
                      type="url"
                      value={repoUrl}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRepoUrl(e.target.value)}
                      placeholder="https://github.com/username/repository"
                      className="w-full pl-12 pr-4 py-4 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      required
                  />
                </div>
                <button
                    type="submit"
                    disabled={isGenerating || !repoUrl}
                    className="bg-white text-black px-8 py-4 rounded-xl hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold flex items-center space-x-2 min-w-fit"
                >
                  {isGenerating ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        <span>Génération...</span>
                      </>
                  ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        <span>Générer</span>
                      </>
                  )}
                </button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-zinc-500">
                  L'IA va analyser votre repository et créer une documentation complète en quelques minutes
                </p>
              </div>
            </form>
          </div>

          {/* Results section V0 style */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-semibold">Projets récents</h3>
                <button className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center space-x-1">
                  <span>Voir tout</span>
                </button>
              </div>

              {generatedDocs.length === 0 ? (
                  <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-12 text-center">
                    <Upload className="w-16 h-16 text-zinc-600 mx-auto mb-6" />
                    <h4 className="text-xl font-semibold mb-3 text-zinc-300">Aucun projet pour le moment</h4>
                    <p className="text-zinc-500 mb-6">
                      Ajoutez votre premier repository GitHub pour commencer à générer des documentations
                    </p>
                    <button className="bg-zinc-800 text-white px-6 py-3 rounded-lg hover:bg-zinc-700 transition-colors">
                      Explorer les exemples
                    </button>
                  </div>
              ) : (
                  <div className="space-y-4">
                    {generatedDocs.map((doc) => (
                        <div key={doc.id} className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900/50 transition-colors group cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                                <FileText className="w-6 h-6 text-blue-400" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-lg group-hover:text-blue-400 transition-colors">{doc.repoName}</h4>
                                <p className="text-sm text-zinc-500">{doc.repoUrl}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="inline-flex items-center space-x-2 bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
                                <CheckCircle className="w-4 h-4" />
                                <span>{doc.status}</span>
                              </div>
                              <p className="text-sm text-zinc-500">{doc.createdAt}</p>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
              )}
            </div>

            {/* Stats sidebar V0 style */}
            <div className="space-y-6">
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                <h4 className="font-semibold mb-6">Aperçu</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-zinc-400">Documentations</span>
                      <span className="font-semibold text-2xl">{generatedDocs.length}</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: `${Math.min(generatedDocs.length * 20, 100)}%`}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-zinc-400">Ce mois</span>
                      <span className="font-semibold">{generatedDocs.length}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-zinc-400">Temps économisé</span>
                      <span className="font-semibold text-green-400">{generatedDocs.length * 2}h</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                <h4 className="font-semibold mb-4">Activité récente</h4>
                <div className="space-y-4">
                  {generatedDocs.slice(0, 3).map((doc) => (
                      <div key={doc.id} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <div className="flex-1 text-sm">
                          <span className="text-zinc-400">Documentation générée pour </span>
                          <span className="text-white font-medium">{doc.repoName}</span>
                        </div>
                        <Clock className="w-4 h-4 text-zinc-500" />
                      </div>
                  ))}
                  {generatedDocs.length === 0 && (
                      <p className="text-zinc-500 text-sm">Aucune activité récente</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default GitHubDocGenerator;
